(function () {
  if (!window.SenkoShell) return;

  window.SenkoShell.registerFrameFeature({
    id: 'sources',
    label: 'Sources',
    order: 40,
    src: 'app/features/sources/index.html?v=20260527-picture-replace',
    title: 'Gerador de sources'
  });
})();
