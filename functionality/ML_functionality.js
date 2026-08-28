window.onload = function generateStars() {

  console.log(window.location)

    var coordinates=[]
    var pageWidth = getPageWidth();

    var containers = document.querySelectorAll('.ml_projects_grid .container');
    var contentHeight = window.innerHeight;
    for (var j = 0; j < containers.length; j++) {
      var bottom = containers[j].getBoundingClientRect().bottom + window.scrollY;
      if (bottom > contentHeight) {
        contentHeight = bottom;
      }
    }
    contentHeight += pageWidth / 20;

    var grid = document.querySelector('.ml_projects_grid');
    if (grid) {
      var gridTop = grid.getBoundingClientRect().top + window.scrollY;
      grid.style.minHeight = (contentHeight - gridTop) + 'px';
    }

  for(i =0; i<300; i++)
  {
    let x = Math.random() * pageWidth, y=Math.random() * contentHeight;
   

    while(pageWidth/20 < x && x <  pageWidth/1.07)
    {
      x = Math.random() * pageWidth
      y = Math.random() * contentHeight
      
    }

    while((contentHeight/5 >y))
    {
      y = Math.random() * contentHeight
    }

    let coordinate_pair = [x,y]

    coordinates.push(coordinate_pair)
  }
for (i = 0; i < coordinates.length; i++){
    var star = document.createElement("div");
        star.setAttribute('id', 'customDiv');
        star.setAttribute('class', 'blink');

        let gen_number = Math.floor(Math.random() * (300 - 100 + 1))+200;
        star.style.width = (pageWidth / gen_number) + "px";
        star.style.height = (pageWidth / gen_number) + "px";

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

