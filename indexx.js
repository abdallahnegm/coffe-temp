function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  function slder(){
    var m =document.getElementById("par")
    if(m.style.backgroundImage ==="url(img/carousel-2.jpg)"){
      m.style.backgroundImage ==="url(img/carousel-1.jpg)"
    }
    else if (m.style.backgroundImage ==="url(img/carousel-1.jpg)"){
      m.style.backgroundImage ==="url(img/carousel-2.jpg)"
    }
    else{
      m.style.backgroundImage === "none"
    }
  }
setInterval(slder , 1000);