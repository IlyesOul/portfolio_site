window.onload = function generateStars() {

  var coordinates = [];

  for (var i = 0; i < 150; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    while (
      window.innerWidth / 7 < x &&
      x < window.innerWidth / 1.2 &&
      (window.innerHeight / 3 < y && y < window.innerHeight / 1.8 || y === 0)
    ) {
      x = Math.random() * window.innerWidth;
      y = Math.random() * window.innerHeight;
    }

    coordinates.push([x, y]);
  }

  for (var i = 0; i < coordinates.length; i++) {
    var star = document.createElement("div");
    star.setAttribute("id", "customDiv");
    star.setAttribute("class", "blink");

    var gen_number = Math.floor(Math.random() * (300 - 100 + 1)) + 200;
    star.style.width = window.innerWidth / gen_number + "px";
    star.style.height = window.innerWidth / gen_number + "px";

    var blink_time = Math.random() * 5 + 2;
    star.style.animation = "blinker " + blink_time + "s linear infinite";

    star.style.position = "absolute";
    if (window.innerWidth / 50 > star.style.width && star.style.width > window.innerWidth / 14) {
      star.style.backgroundColor = "#E6E9EA";
    }
    star.style.borderRadius = "50%";
    star.style.textDecoration = "none";

    star.style.left = coordinates[i][0] + "px";
    star.style.top = coordinates[i][1] + "px";

    document.body.appendChild(star);
  }
};
