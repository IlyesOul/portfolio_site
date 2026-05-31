(function () {
  function getPageWidth() {
    return window.innerWidth;
  }

  function getPageHeight() {
    return window.innerHeight;
  }

  window.getPageWidth = getPageWidth;
  window.getPageHeight = getPageHeight;
})();
