'use strict';
var scoreArray = [];
function Score (userName) {
  this.userName = userName;
  this.score = 0;
  scoreArray.push(this);
}
new Score('James', 2);
new Score('Robert', 6);
new Score('Yaroslav', 3);
new Score('Пошелнахуи', 8);
new Score('James K. Polk', 4);
Math.max(scoreArray);
