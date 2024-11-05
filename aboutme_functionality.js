window.onload = function generateStars() {

    var coordinates=[]

  for(i =0; i<200; i++)
  {
    let x = Math.random() * window.innerWidth, y=Math.random()*1.15 * window.innerHeight*3.25;
   

    while(window.innerWidth/20 < x && x <  window.innerWidth/1.07)
    {
      x = Math.random() * window.innerWidth
      y = Math.random() * window.innerHeight*2.5
      
    }

    let coordinate_pair = [x,y]

    coordinates.push(coordinate_pair)
  }
for (i = 0; i < coordinates.length; i++){
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

    
        star.style.left = coordinates[i][0] + "px";
        star.style.top = coordinates[i][1] + "px";
      
        document.body.appendChild(star);

}

};

