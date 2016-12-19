'use strict';

var charImgTopRight = document.getElementById('char-img-top-left');

charImgTopRight.style.display = 'inline-block';

window.setTimeout(function(){
  charImgTopRight.style.display = 'none';
}, 1000);
