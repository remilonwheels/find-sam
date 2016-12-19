'use strict';

var charImgTopLeft = document.getElementById('char-img-top-left');
var charImgTopRight = document.getElementById('char-img-top-right');
var charImgBtmLeft = document.getElementById('char-img-btm-left');
var charImgBtmRight = document.getElementById('char-img-btm-right');

function renderPosition(position) {
  position.style.display = 'inline-block';
  window.setTimeout(function(){
    position.style.display = 'none';
  }, 1000);
}

renderPosition(charImgTopRight);
renderPosition(charImgBtmRight);
renderPosition(charImgTopLeft);
