(function () {
  'use strict';

  var currentScript = document.currentScript;
  var baseUrl = currentScript && currentScript.src
    ? new URL('./', currentScript.src).href
    : new URL('app/prototype/copy-base-editor/', document.baseURI).href;

  var overlay;
  var textarea;
  var statusEl;
  var saveButton;
  var originalHtml = '';
  var saving = false;
  var previousBodyOverflow = '';

  function prototypeUrl(path) {
    var absoluteUrl = new URL(path, baseUrl).href;
    return window.SenkoFreshAssets
      ? window.SenkoFreshAssets.url(absoluteUrl)
      : absoluteUrl;
  }

  function loadStyle() {
    var href = prototypeUrl('styles.css');
    if (document.querySelector('link[data-senko-copy-base-editor-style="' + href + '"]')) return;

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.dataset.senkoCopyBaseEditorStyle = href;
    document.head.appendChild(link);
  }

  function getCopyApi() {
    var api = window.SenkoBibliotecaCopyBase;
    return api && typeof api.getHtml === 'function' && typeof api.setHtml === 'function'
      ? api
      : null;
  }

  function getGithubApi() {
    var api = window.SenkoBibliotecaGithubV2;
    return api && typeof api.saveCopyBaseTemplate === 'function' ? api : null;
  }

  function createEditButton(copyButton) {
    var button = document.getElementById('senkoCopyBaseEditBtn');
    if (!button) {
      button = document.createElement('button');
      button.type = 'button';
      button.id = 'senkoCopyBaseEditBtn';
      button.className = 'senko-copy-base-edit-trigger';
      button.title = 'Editar HTML básico';
      button.setAttribute('aria-label', 'Editar HTML básico');
      button.setAttribute('aria-haspopup', 'dialog');
      button.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
        '  <path d="M12 20h9" />' +
        '  <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />' +
        '</svg>';
      copyButton.parentNode.insertBefore(button, copyButton);
    }

    button.disabled = !getCopyApi();
    if (!button.dataset.senkoCopyBaseEditorBound) {
      button.dataset.senkoCopyBaseEditorBound = '1';
      button.addEventListener('click', openModal);
    }
  }

  function ensureButton() {
    var copyButton = document.getElementById('copyAllBtn');
    if (copyButton && copyButton.parentNode) createEditButton(copyButton);
  }

  function createModal() {
    if (overlay) return;

    overlay = document.createElement('div');
    overlay.className = 'senko-copy-base-editor-overlay';
    overlay.id = 'senkoCopyBaseEditorOverlay';
    overlay.hidden = true;
    overlay.innerHTML =
      '<div class="senko-copy-base-editor-modal" role="dialog" aria-modal="true" aria-labelledby="senkoCopyBaseEditorTitle">' +
      '  <div class="senko-copy-base-editor-header">' +
      '    <div>' +
      '      <span class="senko-copy-base-editor-category">Biblioteca</span>' +
      '      <h2 id="senkoCopyBaseEditorTitle">Editar HTML básico</h2>' +
      '    </div>' +
      '    <button class="senko-copy-base-editor-close" id="senkoCopyBaseEditorClose" type="button" title="Fechar" aria-label="Fechar">' +
      '      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">' +
      '        <path d="M18 6 6 18M6 6l12 12" />' +
      '      </svg>' +
      '    </button>' +
      '  </div>' +
      '  <div class="senko-copy-base-editor-body">' +
      '    <label for="senkoCopyBaseEditorTextarea">HTML básico</label>' +
      '    <textarea id="senkoCopyBaseEditorTextarea" spellcheck="false"></textarea>' +
      '  </div>' +
      '  <div class="senko-copy-base-editor-footer">' +
      '    <span class="senko-copy-base-editor-status" id="senkoCopyBaseEditorStatus" role="status" aria-live="polite"></span>' +
      '    <div class="senko-copy-base-editor-actions">' +
      '      <button class="senko-copy-base-editor-cancel" id="senkoCopyBaseEditorCancel" type="button">Cancelar</button>' +
      '      <button class="senko-copy-base-editor-save" id="senkoCopyBaseEditorSave" type="button">' +
      '        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
      '          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483v-1.89c-2.782.605-3.369-1.18-3.369-1.18-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855v2.747c0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />' +
      '        </svg>' +
      '        <span>Salvar no GitHub</span>' +
      '      </button>' +
      '    </div>' +
      '  </div>' +
      '</div>';

    document.body.appendChild(overlay);
    textarea = document.getElementById('senkoCopyBaseEditorTextarea');
    statusEl = document.getElementById('senkoCopyBaseEditorStatus');
    saveButton = document.getElementById('senkoCopyBaseEditorSave');

    document.getElementById('senkoCopyBaseEditorClose').addEventListener('click', closeModal);
    document.getElementById('senkoCopyBaseEditorCancel').addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveTemplate);
    textarea.addEventListener('input', updateSaveState);

    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) closeModal();
    });
  }

  function setStatus(message, type) {
    if (!statusEl) return;
    statusEl.textContent = message || '';
    statusEl.dataset.type = type || '';
  }

  function updateSaveState() {
    if (!saveButton || !textarea) return;
    saveButton.disabled = saving || !textarea.value.trim() || textarea.value === originalHtml;
  }

  function openModal() {
    var copyApi = getCopyApi();
    if (!copyApi) return;
    createModal();

    originalHtml = copyApi.getHtml();
    textarea.value = originalHtml;
    setStatus('', '');
    saving = false;
    updateSaveState();
    previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    overlay.hidden = false;
    window.setTimeout(function () { textarea.focus(); }, 0);
  }

  function closeModal() {
    if (!overlay || overlay.hidden || saving) return;
    if (textarea.value !== originalHtml && !window.confirm('Descartar as alterações no HTML básico?')) return;
    overlay.hidden = true;
    document.body.style.overflow = previousBodyOverflow;
  }

  function serializeTemplate(html) {
    return (
      '// @ts-nocheck\n' +
      '/* Template editavel do HTML Basico, pertencente somente a Biblioteca. */\n' +
      'window.SenkoCopyBaseDefaultHtml = ' + JSON.stringify(html) + ';\n'
    );
  }

  function saveTemplate() {
    var copyApi = getCopyApi();
    var githubApi = getGithubApi();
    var nextHtml = textarea.value;

    if (!copyApi || !nextHtml.trim() || saving) return;
    if (!githubApi) {
      setStatus('A integração GitHub ainda está carregando.', 'error');
      return;
    }

    saving = true;
    updateSaveState();
    setStatus('Salvando no GitHub...', 'info');

    githubApi.saveCopyBaseTemplate(serializeTemplate(nextHtml)).then(function (result) {
      if (!result) {
        setStatus('Conclua a configuração do GitHub e salve novamente.', 'error');
        return;
      }

      copyApi.setHtml(nextHtml);
      originalHtml = nextHtml;
      setStatus('HTML básico atualizado no repositório.', 'ok');
    }).catch(function (error) {
      setStatus(error.message || 'Não foi possível salvar no GitHub.', 'error');
    }).finally(function () {
      saving = false;
      updateSaveState();
    });
  }

  function handleKeydown(event) {
    if (event.key === 'Escape' && overlay && !overlay.hidden) closeModal();
  }

  loadStyle();
  createModal();
  ensureButton();

  var observer = new MutationObserver(ensureButton);
  observer.observe(document.body, { childList: true, subtree: true });
  window.setInterval(ensureButton, 500);
  document.addEventListener('keydown', handleKeydown);
})();
