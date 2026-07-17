(function () {
  /*
   * Senko Global Create - prototipo de criacao global.
   *
   * Este modulo nao registra uma feature no shell. Ele injeta/controla um
   * botao global no header e abre fluxos de criacao sem depender da aba ativa.
   */
  var currentScript = document.currentScript;
  var baseUrl = currentScript && currentScript.src
    ? new URL('./', currentScript.src).href
    : new URL('app/prototype/global-create/', document.baseURI).href;

  var overlay;
  var modalBody;
  var modalTitle;
  var modalKicker;
  var backButton;
  var selectedLayoutId = '';
  var selectedCollectionSlug = '';
  var cachedLayouts = [];
  var cachedCollections = [];
  var previousBodyOverflow = '';

  function prototypeUrl(path) {
    var absoluteUrl = new URL(path, baseUrl).href;
    return window.SenkoFreshAssets ? window.SenkoFreshAssets.url(absoluteUrl) : absoluteUrl;
  }

  function loadStyle() {
    var href = prototypeUrl('styles.css');
    if (document.querySelector('link[data-senko-global-create-style="' + href + '"]')) return;

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.dataset.senkoGlobalCreateStyle = href;
    document.head.appendChild(link);
  }

  function createButton() {
    var button = document.getElementById('senkoGlobalCreateBtn');

    if (!button) {
      button = document.createElement('button');
      button.type = 'button';
      button.id = 'senkoGlobalCreateBtn';
      button.className = 'senko-global-create-trigger';
      button.title = 'Criar no SenkoLib';
      button.setAttribute('aria-label', 'Abrir criação global');
      button.setAttribute('aria-haspopup', 'dialog');
      button.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">' +
        '  <path d="M12 5v14" />' +
        '  <path d="M5 12h14" />' +
        '</svg>';

      var layoutLabButton = document.getElementById('senkoForLayoutLab');
      var layoutLabAnchor = layoutLabButton ? layoutLabButton.closest('a') : null;
      var actions = document.querySelector('.header-actions');

      if (layoutLabAnchor && layoutLabAnchor.parentNode) {
        layoutLabAnchor.parentNode.insertBefore(button, layoutLabAnchor);
      } else if (actions) {
        actions.insertBefore(button, actions.firstChild);
      }
    }

    if (!button.dataset.senkoGlobalCreateBound) {
      button.dataset.senkoGlobalCreateBound = '1';
      button.addEventListener('click', openModal);
    }

    return button;
  }

  function iconLibrary() {
    return (
      '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.6" aria-hidden="true">' +
      '  <path d="M10 12h10a6 6 0 0 1 6 6v18H16a6 6 0 0 0-6 6V12Z" />' +
      '  <path d="M38 12H28a6 6 0 0 0-6 6v18h10a6 6 0 0 1 6 6V12Z" />' +
      '  <path d="M16 19h6" />' +
      '  <path d="M16 26h6" />' +
      '  <path d="M28 19h4" />' +
      '  <path d="M28 26h4" />' +
      '</svg>'
    );
  }

  function iconCollection() {
    return (
      '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.6" aria-hidden="true">' +
      '  <path d="M8 15a4 4 0 0 1 4-4h10l4 5h10a4 4 0 0 1 4 4v17a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V15Z" />' +
      '  <path d="M16 26h6v6h-6z" />' +
      '  <path d="M26 26h6v6h-6z" />' +
      '</svg>'
    );
  }

  function iconLayout() {
    return (
      '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.6" aria-hidden="true">' +
      '  <rect x="9" y="10" width="30" height="28" rx="4" />' +
      '  <path d="M9 18h30" />' +
      '  <path d="M18 25h12" />' +
      '  <path d="M18 31h8" />' +
      '</svg>'
    );
  }

  function iconVariant() {
    return (
      '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.6" aria-hidden="true">' +
      '  <rect x="9" y="11" width="18" height="18" rx="3" />' +
      '  <rect x="21" y="19" width="18" height="18" rx="3" />' +
      '  <path d="M16 20h4" />' +
      '  <path d="M28 28h4" />' +
      '</svg>'
    );
  }

  function setHead(kicker, title, canGoBack) {
    modalKicker.textContent = kicker;
    modalTitle.textContent = title;
    backButton.hidden = !canGoBack;
  }

  function createModal() {
    if (overlay) return;

    overlay = document.createElement('div');
    overlay.className = 'senko-global-create-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML =
      '<section class="senko-global-create-modal" role="dialog" aria-modal="true" aria-labelledby="senkoGlobalCreateTitle">' +
      '  <div class="senko-global-create-head">' +
      '    <button class="senko-global-create-back" id="senkoGlobalCreateBackBtn" type="button" title="Voltar" aria-label="Voltar" hidden>' +
      '      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>' +
      '    </button>' +
      '    <div class="senko-global-create-title">' +
      '      <span class="senko-global-create-kicker" id="senkoGlobalCreateKicker">Criar</span>' +
      '      <h2 id="senkoGlobalCreateTitle">Escolha onde criar</h2>' +
      '    </div>' +
      '    <button class="senko-global-create-close" id="senkoGlobalCreateCloseBtn" type="button" title="Fechar" aria-label="Fechar">x</button>' +
      '  </div>' +
      '  <div class="senko-global-create-body" id="senkoGlobalCreateBody"></div>' +
      '</section>';

    document.body.appendChild(overlay);

    modalBody = document.getElementById('senkoGlobalCreateBody');
    modalTitle = document.getElementById('senkoGlobalCreateTitle');
    modalKicker = document.getElementById('senkoGlobalCreateKicker');
    backButton = document.getElementById('senkoGlobalCreateBackBtn');

    document.getElementById('senkoGlobalCreateCloseBtn').addEventListener('click', closeModal);
    backButton.addEventListener('click', renderHome);
    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) closeModal();
    });

    modalBody.addEventListener('click', handleModalClick);
    modalBody.addEventListener('input', handleModalInput);
  }

  function renderHome() {
    selectedLayoutId = '';
    selectedCollectionSlug = '';
    setHead('Criar', 'Escolha onde criar', false);
    modalBody.innerHTML =
      '<div class="senko-global-create-grid" aria-label="Tipos de criação">' +
      '  <button class="senko-global-create-card" type="button" data-action="biblioteca">' +
      '    <span class="senko-global-create-icon">' + iconLibrary() + '</span>' +
      '    <span class="senko-global-create-label">Biblioteca</span>' +
      '  </button>' +
      '  <button class="senko-global-create-card" type="button" data-action="colecoes">' +
      '    <span class="senko-global-create-icon">' + iconCollection() + '</span>' +
      '    <span class="senko-global-create-label">Coleção</span>' +
      '  </button>' +
      '</div>';
  }

  function renderBibliotecaChoice() {
    selectedLayoutId = '';
    selectedCollectionSlug = '';
    setHead('Biblioteca', 'O que você quer criar?', true);
    modalBody.innerHTML =
      '<div class="senko-global-create-grid" aria-label="Opções da Biblioteca">' +
      '  <button class="senko-global-create-card" type="button" data-action="create-layout">' +
      '    <span class="senko-global-create-icon">' + iconLayout() + '</span>' +
      '    <span class="senko-global-create-label">Layout</span>' +
      '  </button>' +
      '  <button class="senko-global-create-card" type="button" data-action="choose-variant-layout">' +
      '    <span class="senko-global-create-icon">' + iconVariant() + '</span>' +
      '    <span class="senko-global-create-label">Variação</span>' +
      '  </button>' +
      '</div>';
  }

  function renderColecoesChoice() {
    selectedLayoutId = '';
    selectedCollectionSlug = '';
    setHead('Coleções', 'O que você quer criar?', true);
    modalBody.innerHTML =
      '<div class="senko-global-create-grid" aria-label="Opções de Coleções">' +
      '  <button class="senko-global-create-card" type="button" data-action="create-collection">' +
      '    <span class="senko-global-create-icon">' + iconCollection() + '</span>' +
      '    <span class="senko-global-create-label">Coleção</span>' +
      '  </button>' +
      '  <button class="senko-global-create-card" type="button" data-action="choose-collection-layout">' +
      '    <span class="senko-global-create-icon">' + iconLayout() + '</span>' +
      '    <span class="senko-global-create-label">Layout</span>' +
      '  </button>' +
      '</div>';
  }

  function renderLoading(kicker, title, message) {
    setHead(kicker || 'Biblioteca', title || 'Carregando layouts', true);
    modalBody.innerHTML =
      '<div class="senko-global-create-loading">' +
      '  <span class="senko-global-create-spinner" aria-hidden="true"></span>' +
      '  <p>' + escapeHtml(message || 'Preparando a Biblioteca...') + '</p>' +
      '</div>';
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function renderVariantPicker(layouts) {
    cachedLayouts = Array.isArray(layouts) ? layouts : [];
    selectedLayoutId = '';
    setHead('Variação', 'Escolha o layout base', true);
    modalBody.innerHTML =
      '<div class="senko-global-create-picker">' +
      '  <label class="senko-global-create-search">' +
      '    <span>Buscar layout</span>' +
      '    <input id="senkoGlobalCreateLayoutSearch" type="search" autocomplete="off" placeholder="Digite nome, id ou tag">' +
      '  </label>' +
      '  <div class="senko-global-create-list" id="senkoGlobalCreateLayoutList"></div>' +
      '  <button class="senko-global-create-primary" id="senkoGlobalCreateVariantBtn" type="button" data-action="create-variant" disabled>Criar variação</button>' +
      '</div>';
    renderLayoutList('');
  }

  function renderCollectionPicker(collections) {
    cachedCollections = Array.isArray(collections) ? collections : [];
    selectedCollectionSlug = '';
    setHead('Coleções', 'Escolha a coleção base', true);
    modalBody.innerHTML =
      '<div class="senko-global-create-picker">' +
      '  <label class="senko-global-create-search">' +
      '    <span>Buscar coleção</span>' +
      '    <input id="senkoGlobalCreateCollectionSearch" type="search" autocomplete="off" placeholder="Digite nome, slug, grupo ou tag">' +
      '  </label>' +
      '  <div class="senko-global-create-list" id="senkoGlobalCreateCollectionList"></div>' +
      '  <button class="senko-global-create-primary" id="senkoGlobalCreateCollectionLayoutBtn" type="button" data-action="create-collection-layout" disabled>Criar layout</button>' +
      '</div>';
    renderCollectionList('');
  }

  function layoutMatches(layout, query) {
    var q = String(query || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
    if (!q) return true;
    var text = [
      layout.id,
      layout.name,
      (layout.tags || []).join(' ')
    ].join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return text.indexOf(q) !== -1;
  }

  function collectionMatches(collection, query) {
    var q = String(query || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
    if (!q) return true;
    var text = [
      collection.slug,
      collection.name,
      collection.group,
      (collection.tags || []).join(' ')
    ].join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return text.indexOf(q) !== -1;
  }

  function renderLayoutList(query) {
    var list = document.getElementById('senkoGlobalCreateLayoutList');
    var createButton = document.getElementById('senkoGlobalCreateVariantBtn');
    if (!list) return;

    var filtered = cachedLayouts.filter(function (layout) {
      return layoutMatches(layout, query);
    });

    if (!filtered.length) {
      list.innerHTML = '<div class="senko-global-create-empty">Nenhum layout encontrado.</div>';
      if (createButton) createButton.disabled = true;
      return;
    }

    list.innerHTML = filtered.map(function (layout) {
      var tags = (layout.tags || []).map(function (tag) {
        return '<span>' + escapeHtml(tag) + '</span>';
      }).join('');

      return (
        '<button class="senko-global-create-layout' + (layout.id === selectedLayoutId ? ' is-selected' : '') + '" type="button" data-action="select-layout" data-layout-id="' + escapeHtml(layout.id) + '">' +
        '  <strong>' + escapeHtml(layout.name || layout.id) + '</strong>' +
        '  <small>' + escapeHtml(layout.id) + ' · ' + Number(layout.variantCount || 0) + ' variação' + (Number(layout.variantCount || 0) === 1 ? '' : 'ões') + '</small>' +
        '  <span class="senko-global-create-tags">' + tags + '</span>' +
        '</button>'
      );
    }).join('');

    if (createButton) createButton.disabled = !selectedLayoutId;
  }

  function renderCollectionList(query) {
    var list = document.getElementById('senkoGlobalCreateCollectionList');
    var createButton = document.getElementById('senkoGlobalCreateCollectionLayoutBtn');
    if (!list) return;

    var filtered = cachedCollections.filter(function (collection) {
      return collectionMatches(collection, query);
    });

    if (!filtered.length) {
      list.innerHTML = '<div class="senko-global-create-empty">Nenhuma coleção encontrada.</div>';
      if (createButton) createButton.disabled = true;
      return;
    }

    list.innerHTML = filtered.map(function (collection) {
      var tags = (collection.tags || []).map(function (tag) {
        return '<span>' + escapeHtml(tag) + '</span>';
      }).join('');
      var group = collection.group ? ' · ' + escapeHtml(collection.group) : '';

      return (
        '<button class="senko-global-create-layout' + (collection.slug === selectedCollectionSlug ? ' is-selected' : '') + '" type="button" data-action="select-collection" data-collection-slug="' + escapeHtml(collection.slug) + '">' +
        '  <strong>' + escapeHtml(collection.name || collection.slug) + '</strong>' +
        '  <small>' + escapeHtml(collection.slug) + group + ' · ' + Number(collection.layoutCount || 0) + ' layout' + (Number(collection.layoutCount || 0) === 1 ? '' : 's') + '</small>' +
        '  <span class="senko-global-create-tags">' + tags + '</span>' +
        '</button>'
      );
    }).join('');

    if (createButton) createButton.disabled = !selectedCollectionSlug;
  }

  function showTemporaryMessage(message) {
    var status = document.getElementById('senkoGlobalCreateStatus');
    if (!status) {
      status = document.createElement('div');
      status.id = 'senkoGlobalCreateStatus';
      status.className = 'senko-global-create-status';
      modalBody.appendChild(status);
    }
    status.textContent = message;
  }

  function waitForBiblioteca() {
    if (window.SenkoShell && typeof window.SenkoShell.switchFeature === 'function') {
      window.SenkoShell.switchFeature('biblioteca');
    }

    return new Promise(function (resolve, reject) {
      var startedAt = Date.now();
      var timer = window.setInterval(function () {
        var api = window.SenkoBiblioteca;
        var ready = api
          && typeof api.openCreateLayout === 'function'
          && typeof api.listLayoutsForGlobalCreate === 'function'
          && typeof api.openCreateVariantForLayout === 'function'
          && typeof api.isReady === 'function'
          && api.isReady();

        if (ready) {
          window.clearInterval(timer);
          resolve(api);
          return;
        }

        if (Date.now() - startedAt > 6000) {
          window.clearInterval(timer);
          reject(new Error('A Biblioteca ainda não terminou de carregar.'));
        }
      }, 80);
    });
  }

  function waitForColecoes() {
    if (window.SenkoShell && typeof window.SenkoShell.switchFeature === 'function') {
      window.SenkoShell.switchFeature('colecoes');
    }

    return new Promise(function (resolve, reject) {
      var startedAt = Date.now();
      var timer = window.setInterval(function () {
        var api = window.SenkoColecoes;
        var ready = api
          && typeof api.openCreateCollection === 'function'
          && typeof api.listCollectionsForGlobalCreate === 'function'
          && typeof api.openCreateLayoutForCollection === 'function'
          && typeof api.isReady === 'function'
          && api.isReady();

        if (ready) {
          window.clearInterval(timer);
          resolve(api);
          return;
        }

        if (Date.now() - startedAt > 6000) {
          window.clearInterval(timer);
          reject(new Error('Coleções ainda não terminou de carregar.'));
        }
      }, 80);
    });
  }

  function openCreateLayout() {
    renderLoading();
    waitForBiblioteca().then(function (api) {
      closeModal();
      api.openCreateLayout();
    }).catch(function (error) {
      renderBibliotecaChoice();
      showTemporaryMessage(error.message || 'Não foi possível abrir o modal de layout.');
    });
  }

  function openVariantPicker() {
    renderLoading();
    waitForBiblioteca().then(function (api) {
      renderVariantPicker(api.listLayoutsForGlobalCreate());
    }).catch(function (error) {
      renderBibliotecaChoice();
      showTemporaryMessage(error.message || 'Não foi possível listar os layouts.');
    });
  }

  function openCreateVariant() {
    if (!selectedLayoutId) return;
    waitForBiblioteca().then(function (api) {
      var opened = api.openCreateVariantForLayout(selectedLayoutId);
      if (!opened) {
        showTemporaryMessage('Layout não encontrado.');
        return;
      }
      closeModal();
      document.body.style.overflow = 'hidden';
    }).catch(function (error) {
      showTemporaryMessage(error.message || 'Não foi possível abrir o modal de variação.');
    });
  }

  function openCreateCollection() {
    renderLoading('Coleções', 'Carregando Coleções', 'Preparando Coleções...');
    waitForColecoes().then(function (api) {
      closeModal();
      api.openCreateCollection();
    }).catch(function (error) {
      renderColecoesChoice();
      showTemporaryMessage(error.message || 'Não foi possível abrir o modal de coleção.');
    });
  }

  function openCollectionLayoutPicker() {
    renderLoading('Coleções', 'Carregando coleções', 'Preparando a lista de coleções...');
    waitForColecoes().then(function (api) {
      renderCollectionPicker(api.listCollectionsForGlobalCreate());
    }).catch(function (error) {
      renderColecoesChoice();
      showTemporaryMessage(error.message || 'Não foi possível listar as coleções.');
    });
  }

  function openCreateCollectionLayout() {
    if (!selectedCollectionSlug) return;
    waitForColecoes().then(function (api) {
      return Promise.resolve(api.openCreateLayoutForCollection(selectedCollectionSlug));
    }).then(function (opened) {
      if (!opened) {
        showTemporaryMessage('Coleção não encontrada.');
        return;
      }
      closeModal();
      document.body.style.overflow = 'hidden';
    }).catch(function (error) {
      showTemporaryMessage(error.message || 'Não foi possível abrir o modal de layout da coleção.');
    });
  }

  function handleModalClick(event) {
    var target = event.target.closest('[data-action]');
    if (!target) return;

    var action = target.dataset.action;
    if (action === 'biblioteca') renderBibliotecaChoice();
    else if (action === 'colecoes') renderColecoesChoice();
    else if (action === 'create-layout') openCreateLayout();
    else if (action === 'choose-variant-layout') openVariantPicker();
    else if (action === 'create-collection') openCreateCollection();
    else if (action === 'choose-collection-layout') openCollectionLayoutPicker();
    else if (action === 'select-layout') {
      selectedLayoutId = target.dataset.layoutId || '';
      var input = document.getElementById('senkoGlobalCreateLayoutSearch');
      renderLayoutList(input ? input.value : '');
    } else if (action === 'select-collection') {
      selectedCollectionSlug = target.dataset.collectionSlug || '';
      var collectionInput = document.getElementById('senkoGlobalCreateCollectionSearch');
      renderCollectionList(collectionInput ? collectionInput.value : '');
    } else if (action === 'create-variant') {
      openCreateVariant();
    } else if (action === 'create-collection-layout') {
      openCreateCollectionLayout();
    }
  }

  function handleModalInput(event) {
    if (event.target && event.target.id === 'senkoGlobalCreateLayoutSearch') {
      renderLayoutList(event.target.value);
    } else if (event.target && event.target.id === 'senkoGlobalCreateCollectionSearch') {
      renderCollectionList(event.target.value);
    }
  }

  function openModal() {
    createModal();
    previousBodyOverflow = document.body.style.overflow;
    renderHome();
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    var button = document.getElementById('senkoGlobalCreateBtn');
    if (button) button.classList.add('is-active');

    window.setTimeout(function () {
      var firstOption = overlay.querySelector('.senko-global-create-card');
      if (firstOption) firstOption.focus();
    }, 0);
  }

  function closeModal() {
    if (!overlay) return;
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = previousBodyOverflow || '';

    var button = document.getElementById('senkoGlobalCreateBtn');
    if (button) button.classList.remove('is-active');
  }

  function initGlobalCreate() {
    loadStyle();
    createButton();
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && overlay && overlay.classList.contains('is-open')) closeModal();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobalCreate);
  } else {
    initGlobalCreate();
  }
})();
