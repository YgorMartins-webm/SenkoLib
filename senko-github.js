// @ts-nocheck
/* ═══════════════════════════════════════════════════════════════════════
   senko-github.js — Módulo experimental: salvar direto no GitHub
   ───────────────────────────────────────────────────────────────────────
   COMO USAR:
     Adicione no index.html APÓS o script.js (e no lugar do senko-fsa.js,
     ou junto — os dois podem coexistir):
       <script src="senko-github.js"></script>

   DIFERENÇAS em relação ao senko-fsa.js:
     - Não precisa de Live Server (funciona com file:// e qualquer browser)
     - Não precisa selecionar pasta — usa o repositório GitHub diretamente
     - Histórico de versões nativo via Git (cada save vira um commit)
     - Requer conexão com a internet
     - Token fica no localStorage — use um fine-grained token com acesso
       apenas a este repositório

   CONFIGURAÇÃO:
     Edite o objeto GITHUB_CONFIG abaixo antes de usar.
═══════════════════════════════════════════════════════════════════════ */


/* ═══════════════════════════════════════════════════════════════════════
   CONFIGURAÇÃO — edite aqui
═══════════════════════════════════════════════════════════════════════ */
var GITHUB_CONFIG = {
  TOKEN:  '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',
  OWNER:  'YgorMartins-webm',
  REPO:   'SenkoLib',
  BRANCH: 'main'
};


/* ═══════════════════════════════════════════════════════════════════════
   GITHUB API — funções base
═══════════════════════════════════════════════════════════════════════ */

/* Retorna { content (string), sha } de um arquivo no repositório */
async function githubGetFile(path) {
  var url = 'https://api.github.com/repos/' +
    GITHUB_CONFIG.OWNER + '/' + GITHUB_CONFIG.REPO +
    '/contents/' + path +
    '?ref=' + GITHUB_CONFIG.BRANCH;

  var res = await fetch(url, {
    headers: {
      'Authorization': 'token ' + GITHUB_CONFIG.TOKEN,
      'Accept': 'application/vnd.github.v3+json'
    }
  });

  if (!res.ok) {
    var err = await res.json();
    throw new Error('GitHub GET ' + path + ': ' + (err.message || res.status));
  }

  var data = await res.json();
  return {
    content: decodeURIComponent(escape(atob(data.content.replace(/\n/g, '')))),
    sha: data.sha
  };
}

/* Salva (PUT) um arquivo no repositório.
   sha é obrigatório para atualizar — obtido via githubGetFile. */
async function githubPutFile(path, content, sha, commitMsg) {
  var url = 'https://api.github.com/repos/' +
    GITHUB_CONFIG.OWNER + '/' + GITHUB_CONFIG.REPO +
    '/contents/' + path;

  var encoded = btoa(unescape(encodeURIComponent(content)));

  var body = {
    message: commitMsg || '[SenkoLib] update ' + path,
    content: encoded,
    branch:  GITHUB_CONFIG.BRANCH,
    sha:     sha
  };

  var res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': 'token ' + GITHUB_CONFIG.TOKEN,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    var err = await res.json();
    throw new Error('GitHub PUT ' + path + ': ' + (err.message || res.status));
  }

  return await res.json();
}

/* Lista arquivos de uma pasta no repositório */
async function githubListDir(path) {
  var url = 'https://api.github.com/repos/' +
    GITHUB_CONFIG.OWNER + '/' + GITHUB_CONFIG.REPO +
    '/contents/' + path +
    '?ref=' + GITHUB_CONFIG.BRANCH;

  var res = await fetch(url, {
    headers: {
      'Authorization': 'token ' + GITHUB_CONFIG.TOKEN,
      'Accept': 'application/vnd.github.v3+json'
    }
  });

  if (!res.ok) {
    var err = await res.json();
    throw new Error('GitHub LIST ' + path + ': ' + (err.message || res.status));
  }

  return await res.json(); /* array de { name, path, sha, type } */
}


/* ═══════════════════════════════════════════════════════════════════════
   UTILITÁRIOS — reaproveitados do senko-fsa.js
   (copiados aqui para que o módulo seja independente)
═══════════════════════════════════════════════════════════════════════ */
function ghFindObjectBounds(content, layoutId) {
  var marker    = '/*@@@@Senko - ' + layoutId.toLowerCase() + ' */';
  var markerPos = content.indexOf(marker);
  if (markerPos === -1) return { error: 'no_marker' };

  var objOpen = content.indexOf('{', markerPos + marker.length);
  if (objOpen === -1) return null;

  var i = objOpen, depth = 0, inTemplate = false, len = content.length;
  while (i < len) {
    var ch = content[i];
    if (ch === '`') {
      var bs = 0, j = i - 1;
      while (j >= 0 && content[j] === '\\') { bs++; j--; }
      if (bs % 2 === 0) inTemplate = !inTemplate;
      i++; continue;
    }
    if (inTemplate) { i++; continue; }
    if (ch === '{') { depth++; i++; continue; }
    if (ch === '}') {
      depth--;
      if (depth === 0) {
        var end = i + 1;
        if (content[end] === ',') end++;
        if (content[end] === '\n') end++;
        return { start: markerPos, end: end };
      }
      i++; continue;
    }
    i++;
  }
  return null;
}

function ghDeduplicateMarkers(content, layoutId) {
  var marker = '/*@@@@Senko - ' + layoutId.toLowerCase() + ' */';
  var positions = [], search = 0;
  while (true) {
    var pos = content.indexOf(marker, search);
    if (pos === -1) break;
    positions.push(pos);
    search = pos + marker.length;
  }
  if (positions.length <= 1) return content;
  for (var k = positions.length - 2; k >= 0; k--) {
    var start = positions[k];
    var lineEnd = content.indexOf('\n', start);
    if (lineEnd === -1) lineEnd = content.length;
    else lineEnd += 1;
    content = content.slice(0, start) + content.slice(lineEnd);
  }
  return content;
}


/* ═══════════════════════════════════════════════════════════════════════
   CORE: Salvar layout existente via GitHub
═══════════════════════════════════════════════════════════════════════ */
async function githubSaveLayout(layoutId, objectCode) {
  try {
    /* Lista arquivos de /layouts/ */
    var entries = await githubListDir('layouts');
    var jsFiles = entries.filter(function (e) {
      return e.type === 'file' && e.name.endsWith('.js');
    });

    var marker = '/*@@@@Senko - ' + layoutId.toLowerCase() + ' */';
    var candidates = [];

    for (var i = 0; i < jsFiles.length; i++) {
      var f = await githubGetFile(jsFiles[i].path);
      if (f.content.indexOf(marker) !== -1) {
        candidates.push({ path: jsFiles[i].path, sha: f.sha, content: f.content });
      }
    }

    if (candidates.length === 0) {
      alert('Marcador não encontrado para "' + layoutId + '".\n\nSe é um layout novo, use o "Salvar no GitHub" do modal de criação.');
      return false;
    }
    if (candidates.length > 1) {
      alert('O ID "' + layoutId + '" foi encontrado em mais de um arquivo:\n' +
        candidates.map(function (c) { return c.path; }).join(', ') +
        '\n\nCorrija a duplicata manualmente.');
      return false;
    }

    var target  = candidates[0];
    var content = ghDeduplicateMarkers(target.content, layoutId);
    var bounds  = ghFindObjectBounds(content, layoutId);

    if (!bounds || bounds.error) {
      alert('Não foi possível localizar o objeto "' + layoutId + '" no arquivo.');
      return false;
    }

    var newContent =
      content.slice(0, bounds.start) +
      objectCode + '\n' +
      content.slice(bounds.end);

    await githubPutFile(
      target.path,
      newContent,
      target.sha,
      '[SenkoLib] edit layout: ' + layoutId
    );

    return target.path.split('/').pop();

  } catch (e) {
    console.error('[senko-github] Erro ao salvar layout:', e);
    alert('Erro ao salvar no GitHub:\n' + e.message);
    return false;
  }
}


/* ═══════════════════════════════════════════════════════════════════════
   CORE: Salvar novo layout via GitHub
═══════════════════════════════════════════════════════════════════════ */
async function githubSaveNewLayout(fileName, objectCode, layoutId) {
  try {
    var path = 'layouts/' + fileName;
    var f    = await githubGetFile(path);

    var marker = '/*@@@@Senko - ' + layoutId.toLowerCase() + ' */';
    if (f.content.indexOf(marker) !== -1) {
      alert('O ID "' + layoutId + '" já existe em ' + fileName + '.');
      return false;
    }

    var closePos = f.content.lastIndexOf(']);');
    if (closePos === -1) {
      alert('Não foi possível encontrar o fechamento do array em ' + fileName + '.');
      return false;
    }

    var newContent =
      f.content.slice(0, closePos) +
      '\n' + objectCode + '\n\n' +
      f.content.slice(closePos);

    await githubPutFile(
      path,
      newContent,
      f.sha,
      '[SenkoLib] add layout: ' + layoutId
    );

    return fileName;

  } catch (e) {
    console.error('[senko-github] Erro ao salvar novo layout:', e);
    alert('Erro ao salvar no GitHub:\n' + e.message);
    return false;
  }
}


/* ═══════════════════════════════════════════════════════════════════════
   CORE: Salvar variante via GitHub
═══════════════════════════════════════════════════════════════════════ */
async function githubSaveVariant(parentId, variantNome, objectCode) {
  try {
    var path = 'variants/' + parentId + '.js';
    var f    = await githubGetFile(path);

    var marker    = "nome: '" + variantNome + "'";
    var pos       = f.content.indexOf(marker);
    if (pos === -1) {
      alert('Variante "' + variantNome + '" não encontrada em ' + path);
      return false;
    }
    if (f.content.indexOf(marker, pos + 1) !== -1) {
      alert('A variante "' + variantNome + '" aparece mais de uma vez.\nCorrija manualmente.');
      return false;
    }

    /* Parser: acha o { de abertura do objeto */
    var objOpen = -1;
    var tmpScan = f.content.lastIndexOf('{', pos);
    while (tmpScan !== -1) {
      var between = f.content.slice(tmpScan + 1, pos).trim();
      if (/^[\s]*$/.test(between)) { objOpen = tmpScan; break; }
      tmpScan = f.content.lastIndexOf('{', tmpScan - 1);
    }
    if (objOpen === -1) { alert('Início do objeto da variante não encontrado.'); return false; }

    /* Acha o } de fechamento */
    var i = objOpen, depth = 0, inTemplate = false, len = f.content.length, objEnd = -1;
    while (i < len) {
      var ch = f.content[i];
      if (ch === '`') {
        var bs = 0, j = i - 1;
        while (j >= 0 && f.content[j] === '\\') { bs++; j--; }
        if (bs % 2 === 0) inTemplate = !inTemplate;
        i++; continue;
      }
      if (inTemplate) { i++; continue; }
      if (ch === '{') { depth++; i++; continue; }
      if (ch === '}') {
        depth--;
        if (depth === 0) {
          objEnd = i + 1;
          if (f.content[objEnd] === ',') objEnd++;
          if (f.content[objEnd] === '\n') objEnd++;
          break;
        }
        i++; continue;
      }
      i++;
    }
    if (objEnd === -1) { alert('Fim do objeto da variante não encontrado.'); return false; }

    var newContent =
      f.content.slice(0, objOpen) +
      objectCode + ',\n' +
      f.content.slice(objEnd);

    await githubPutFile(
      path,
      newContent,
      f.sha,
      '[SenkoLib] edit variant: ' + variantNome + ' (' + parentId + ')'
    );

    return parentId + '.js';

  } catch (e) {
    console.error('[senko-github] Erro ao salvar variante:', e);
    alert('Erro ao salvar variante no GitHub:\n' + e.message);
    return false;
  }
}


/* ═══════════════════════════════════════════════════════════════════════
   UI — Indicador de status do GitHub no header
═══════════════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {

  var SAVE_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>';
  var GH_ICON  = '<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>';

  /* ── Barra de status GitHub (injetada abaixo da fsa-bar) ── */
  var fsaBar = document.querySelector('.fsa-bar');
  if (fsaBar) {
    var ghBar = document.createElement('div');
    ghBar.className = 'fsa-bar';
    ghBar.id = 'ghBar';
    ghBar.style.cssText = 'background: rgba(0,0,0,.03); border-bottom-color: rgba(0,0,0,.08);';
    ghBar.innerHTML =
      '<span class="fsa-label">' + GH_ICON + ' &nbsp;GitHub: ' +
      GITHUB_CONFIG.OWNER + '/' + GITHUB_CONFIG.REPO + ' (' + GITHUB_CONFIG.BRANCH + ')</span>' +
      '<span id="ghStatus" class="fsa-status">pronto</span>';
    fsaBar.parentNode.insertBefore(ghBar, fsaBar.nextSibling);
  }

  function setGhStatus(msg, color) {
    var el = document.getElementById('ghStatus');
    if (el) { el.textContent = msg; el.style.color = color || ''; }
  }


  /* ── Patch: botão "Salvar no arquivo" do modal de edição ──
     Se o senko-fsa.js também estiver carregado, adiciona um botão
     "Salvar no GitHub" separado para não conflitar. */
  var editHeader = document.querySelector('#editModalOverlay .modal-header > div:last-child') ||
                   document.getElementById('saveToFileBtn') && document.getElementById('saveToFileBtn').parentNode;

  if (editHeader) {
    var ghEditBtn = document.createElement('button');
    ghEditBtn.id = 'ghSaveEditBtn';
    ghEditBtn.className = 'btn-save-file';
    ghEditBtn.style.background = '#1a1a2e';
    ghEditBtn.innerHTML = GH_ICON + ' &nbsp;GitHub';

    /* Insere após saveToFileBtn se existir, senão após copyEditBtn */
    var ref = document.getElementById('saveToFileBtn') || document.getElementById('copyEditBtn');
    if (ref) ref.parentNode.insertBefore(ghEditBtn, ref.nextSibling);

    ghEditBtn.addEventListener('click', async function () {
      var code = document.getElementById('editGeneratedCode').textContent;
      var id   = document.getElementById('editId').value.trim().toLowerCase();
      if (!id || code.indexOf('//') === 0) { alert('Preencha os campos primeiro.'); return; }

      this.innerHTML = GH_ICON + ' &nbsp;Salvando...';
      setGhStatus('salvando...', 'var(--orange)');
      var self = this;

      var result = await githubSaveLayout(id, code);

      if (result) {
        /* Atualiza memória */
        var layouts = SenkoLib.getAll();
        for (var i = 0; i < layouts.length; i++) {
          if (layouts[i].id === id) {
            layouts[i].name = document.getElementById('editName').value.trim();
            layouts[i].tags = document.getElementById('editTags').value
              .split(',').map(function (t) { return t.trim(); }).filter(Boolean);
            layouts[i].html = document.getElementById('editHtml').value;
            layouts[i].css  = document.getElementById('editCss').value;
            break;
          }
        }
        setGhStatus('✓ salvo em ' + result, 'var(--green)');
        self.innerHTML = GH_ICON + ' &nbsp;✓ ' + result;
        setTimeout(function () {
          closeEditModal();
          renderGrid();
          self.innerHTML = GH_ICON + ' &nbsp;GitHub';
          setGhStatus('pronto');
        }, 1500);
      } else {
        setGhStatus('erro ao salvar', 'var(--red)');
        self.innerHTML = GH_ICON + ' &nbsp;GitHub';
      }
    });
  }


  /* ── Patch: botão "Salvar no GitHub" no modal de nova variante ── */
  var newVarCopyBtn = document.getElementById('newVarCopyBtn');
  if (newVarCopyBtn && !document.getElementById('ghSaveVariantBtn')) {
    var ghVarBtn = document.createElement('button');
    ghVarBtn.id = 'ghSaveVariantBtn';
    ghVarBtn.className = 'btn-save-file';
    ghVarBtn.style.background = '#1a1a2e';
    ghVarBtn.innerHTML = GH_ICON + ' &nbsp;GitHub';
    newVarCopyBtn.parentNode.insertBefore(ghVarBtn, newVarCopyBtn.nextSibling);

    ghVarBtn.addEventListener('click', async function () {
      var nome = document.getElementById('newVarName').value.trim().toLowerCase();
      if (nome.length < 3)          { alert('Preencha o nome da variante primeiro.'); return; }
      if (!state.currentForVariant) { alert('Nenhum layout pai selecionado.'); return; }

      var html     = document.getElementById('newVarHtml').value;
      var css      = document.getElementById('newVarCss').value;
      var safeHtml = html.replace(/`/g, '\\`');
      var safeCss  = css.replace(/`/g, '\\`');
      var parentId = state.currentForVariant.id;

      var objectCode =
        "  { nome: '" + nome + "',\n" +
        '    html: `' + safeHtml + '`,\n' +
        '    css: `'  + safeCss  + '` }';

      this.innerHTML = GH_ICON + ' &nbsp;Salvando...';
      setGhStatus('salvando...', 'var(--orange)');
      var self = this;

      var result = await githubSaveVariant(parentId, nome, objectCode);

      if (result) {
        /* Atualiza memória */
        var variants    = SenkoLib.getVariants(parentId);
        var existingIdx = -1;
        for (var i = 0; i < variants.length; i++) {
          if ((variants[i].nome || variants[i].name) === nome) { existingIdx = i; break; }
        }
        if (existingIdx !== -1) {
          variants[existingIdx].html = html;
          variants[existingIdx].css  = css;
        } else {
          SenkoLib.registerVariant(parentId, [{ nome: nome, html: html, css: css }]);
        }

        setGhStatus('✓ salvo em ' + result, 'var(--green)');
        self.innerHTML = GH_ICON + ' &nbsp;✓ ' + result;
        setTimeout(function () {
          closeNewVariantModal();
          if (state.currentForVariant) {
            var updated = SenkoLib.getVariants(state.currentForVariant.id);
            renderVariantBlocks(updated);
            var countEl = document.getElementById('variantsCount');
            if (countEl) countEl.textContent = updated.length + (updated.length === 1 ? ' variação' : ' variações');
          }
          renderGrid();
          self.innerHTML = GH_ICON + ' &nbsp;GitHub';
          setGhStatus('pronto');
        }, 1500);
      } else {
        setGhStatus('erro ao salvar', 'var(--red)');
        self.innerHTML = GH_ICON + ' &nbsp;GitHub';
      }
    });
  }


  /* ── Dropdown de arquivos + botão "Salvar no GitHub" no modal de criação ── */
  var copyGeneratedBtn = document.getElementById('copyGeneratedBtn');
  if (copyGeneratedBtn && !document.getElementById('ghNewLayoutSelect')) {

    /* Select de arquivo */
    var ghSelect = document.createElement('select');
    ghSelect.id = 'ghNewLayoutSelect';
    ghSelect.disabled = true;
    ghSelect.innerHTML = '<option value="">-- arquivo --</option>';
    ghSelect.style.cssText = [
      'font-family: var(--font-body)', 'font-size: .85rem', 'font-weight: 700',
      'padding: .35rem .7rem', 'border: 1.5px solid var(--border)',
      'border-radius: var(--radius)', 'background: var(--bg)',
      'color: var(--text2)', 'cursor: pointer', 'height: 34px', 'width: 180px'
    ].join(';');

    /* Botão */
    var ghNewBtn = document.createElement('button');
    ghNewBtn.id = 'ghSaveNewLayoutBtn';
    ghNewBtn.className = 'btn-save-file';
    ghNewBtn.style.background = '#1a1a2e';
    ghNewBtn.innerHTML = GH_ICON + ' &nbsp;GitHub';

    /* Wrapper */
    var ghGroup = document.createElement('div');
    ghGroup.style.cssText = 'display:inline-flex;align-items:center;gap:.4rem;';
    ghGroup.appendChild(ghSelect);
    ghGroup.appendChild(ghNewBtn);

    /* Insere após o grupo do senko-fsa.js se existir, senão após copyGeneratedBtn */
    var addTargetFile = document.getElementById('addTargetFile');
    var insertAfter = addTargetFile ? addTargetFile.parentNode : copyGeneratedBtn;
    insertAfter.parentNode.insertBefore(ghGroup, insertAfter.nextSibling);

    /* Popula o select com os arquivos de /layouts/ */
    async function populateGhSelect() {
      ghSelect.innerHTML = '<option value="">-- arquivo --</option>';
      try {
        var entries = await githubListDir('layouts');
        var files = entries
          .filter(function (e) { return e.type === 'file' && e.name.endsWith('.js'); })
          .map(function (e) { return e.name; })
          .sort();
        files.forEach(function (name) {
          var opt = document.createElement('option');
          opt.value = name;
          opt.textContent = 'layouts/' + name;
          ghSelect.appendChild(opt);
        });
        ghSelect.disabled = false;
        setGhStatus('conectado — ' + files.length + ' arquivo(s)', 'var(--green)');
      } catch (e) {
        setGhStatus('erro ao conectar: ' + e.message, 'var(--red)');
        ghSelect.disabled = true;
      }
    }

    /* Popula ao abrir o modal de criação */
    var openAddBtn = document.getElementById('openAddModal');
    if (openAddBtn) {
      openAddBtn.addEventListener('click', function () {
        setTimeout(populateGhSelect, 50);
      });
    }

    /* Popula imediatamente (testa a conexão) */
    populateGhSelect();

    /* Clique no botão */
    ghNewBtn.addEventListener('click', async function () {
      var code     = document.getElementById('generatedCode').textContent;
      var id       = document.getElementById('addId').value.trim().toLowerCase();
      var fileName = document.getElementById('ghNewLayoutSelect').value;

      if (!id || code.indexOf('//') === 0) { alert('Preencha os campos primeiro.'); return; }
      if (!fileName) { alert('Selecione o arquivo de destino.'); return; }

      this.innerHTML = GH_ICON + ' &nbsp;Salvando...';
      setGhStatus('salvando...', 'var(--orange)');
      var self = this;

      var result = await githubSaveNewLayout(fileName, code, id);

      if (result) {
        var html = document.getElementById('addHtml').value;
        var css  = document.getElementById('addCss').value;
        var name = document.getElementById('addName').value.trim();
        var tags = document.getElementById('addTags').value
          .split(',').map(function (t) { return t.trim(); }).filter(Boolean);

        SenkoLib.register([{ id: id, name: name, tags: tags, html: html, css: css }]);

        setGhStatus('✓ salvo em ' + result, 'var(--green)');
        self.innerHTML = GH_ICON + ' &nbsp;✓ ' + result;
        setTimeout(function () {
          closeAddModal();
          renderGrid();
          self.innerHTML = GH_ICON + ' &nbsp;GitHub';
          setGhStatus('pronto');
        }, 1500);
      } else {
        setGhStatus('erro ao salvar', 'var(--red)');
        self.innerHTML = GH_ICON + ' &nbsp;GitHub';
      }
    });
  }

});
