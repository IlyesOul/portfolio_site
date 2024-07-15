window.onload = function generateStars() {
    for (let i = 0; i <= 100; i++) {
        var star = document.createElement("div");
        star.setAttribute('id', 'customDiv');
        star.setAttribute('class', 'blink');

        let gen_number = Math.floor(Math.random() * (300 - 100 + 1))+200;
        star.style.width = (window.innerWidth / gen_number) + "px";
        star.style.height = (window.innerWidth / gen_number) + "px";

        // Generate blink time
        let blink_time = Math.random() * 5 +2;
        star.style.animation = `blinker ${blink_time}s linear infinite`;

        star.style.position = "absolute";
        star.style.backgroundColor = "#E6E9EA";
        star.style.borderRadius = "50%";
        star.style.textDecoration = "none";

        // Random position within the viewport
        let posX = Math.random()* (window.innerWidth-50)
        let posY = Math.random() * (window.innerHeight-50)

        // Randomize until star is out of box
         while ((posX < window.innerWidth / 2.3 && posX > window.innerWidth / 5.5)&&(posY > window.innerHeight / 2.9 && posY < window.innerHeight / 1.5)) {
              posX = Math.random() * (window.innerWidth - 50);
              posY = Math.random() * (window.innerHeight - 50);
          }
         
        star.style.left = posX + "px";
        star.style.top = posY + "px";

        document.body.appendChild(star);

        console.log(i);
    }
};
