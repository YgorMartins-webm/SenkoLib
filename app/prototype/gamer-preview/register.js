(function () {
  if (!window.SenkoShell) return;

  window.SenkoShell.registerFrameFeature({
    id: 'gamer-preview',
    label: 'Preview (beta)',
    order: 50,
    src: 'app/prototype/gamer-preview/index.html',
    title: 'Preview (beta)'
  });
})();
