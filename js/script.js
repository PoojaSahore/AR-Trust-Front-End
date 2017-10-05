var images = [];
images = ['a1.JPG', 'a2.JPG', 'a3.JPG', 'a4.JPG'];

var i = 0;
var pic = document.getElementById('pic');

function changeimg() {
  pic.src = 'images/' + images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout('changeimg()', 2000);
}

window.onload = changeimg;
