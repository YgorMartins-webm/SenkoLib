(function () {
  if (!window.SenkoShell) return;

  window.SenkoShell.registerFrameFeature({
    id: 'imagens',
    label: 'Imagens',
    order: 30,
    src: 'app/features/imagens/index.html?v=20260529-firefox-download',
    title: 'Ferramentas de imagens'
  });
})();
