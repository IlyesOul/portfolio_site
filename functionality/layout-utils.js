(function () {
  var CANVAS_SELECTOR =
    ".intro_grid, .list_grid, .list_grid_aboutme, .independent_grid, .proficiency_grid, .ml_projects_grid";

  function getPageCanvas() {
    return document.querySelector(CANVAS_SELECTOR);
  }

  function getPageWidth() {
    var canvas = getPageCanvas();
    if (canvas) {
      return canvas.offsetWidth;
    }

    return document.body.offsetWidth || window.innerWidth;
  }

  function getPageHeight() {
    var canvas = getPageCanvas();
    if (canvas) {
      return canvas.offsetHeight;
    }

    return document.body.offsetHeight || window.innerHeight;
  }

  window.getPageCanvas = getPageCanvas;
  window.getPageWidth = getPageWidth;
  window.getPageHeight = getPageHeight;
})();
