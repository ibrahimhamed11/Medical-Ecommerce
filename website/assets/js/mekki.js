var image = document.getElementById("images");
var images = [
  "./assets/images/20.png",
  "./assets/images/29.png",
  "./assets/images/21.png",
  "./assets/images/27.png",
  "./assets/images/25.png",
  "./assets/images/28.png",
];

setInterval (function(){

  var random = Math.floor(Math.random()*6);
  image.src = images[random];

},1000);