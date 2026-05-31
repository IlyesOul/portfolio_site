window.onload = function generateStars() {

  var pageW = getPageWidth();
  var pageH = getPageHeight();
  var coordinates = [];

  for (var i = 0; i < 150; i++) {
    var x = Math.random() * pageW;
    var y = Math.random() * pageH;

    while ((pageW / 7 < x && x < pageW / 1.2) && (pageH / 3 < y && y < pageH / 1.8 || y === 0)) {
      x = Math.random() * pageW;
      y = Math.random() * pageH;
    }

    coordinates.push([x, y]);
  }

  for (i = 0; i < coordinates.length; i++) {
    var star = document.createElement("div");
    star.setAttribute("id", "customDiv");
    star.setAttribute("class", "blink");

    var gen_number = Math.floor(Math.random() * (300 - 100 + 1)) + 200;
    var starSize = pageW / gen_number;
    star.style.width = starSize + "px";
    star.style.height = starSize + "px";

    var blink_time = Math.random() * 5 + 2;
    star.style.animation = "blinker " + blink_time + "s linear infinite";

    star.style.position = "absolute";
    if (pageW / 50 > starSize && starSize > pageW / 14) {
      star.style.backgroundColor = "#E6E9EA";
    }
    star.style.borderRadius = "50%";
    star.style.textDecoration = "none";

    star.style.left = coordinates[i][0] + "px";
    star.style.top = coordinates[i][1] + "px";

    var canvas = getPageCanvas();
    (canvas || document.body).appendChild(star);
  }
};
