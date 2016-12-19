'use strict';

var charImgTopLeft = document.getElementById('char-img-top-left');
var charImgTopRight = document.getElementById('char-img-top-right');
var charImgBtmLeft = document.getElementById('char-img-btm-left');
var charImgBtmRight = document.getElementById('char-img-btm-right');
var test = 3000;

function renderPosition(position, timeToShow) {
  console.log('entering render position');
  position.style.display = 'inline-block';
  window.setTimeout(function(){
    position.style.display = 'none';
  }, timeToShow);
}
// for (var i = 0; i < 2; i++){
// renderPosition(charImgTopLeft, test * (i+1));
// }
for (var i = 0; i < 2; i++)
renderPosition(charImgTopLeft, 2000);
window.setTimeout(function(){
  renderPosition(charImgBtmRight, 2000)

}, 2000);
