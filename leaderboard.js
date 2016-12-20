'use strict';
var newArray = [scoreArray];
var scoreArray = [];
function Score (userName, score) {
  this.userName = userName;
  this.score = score ;
  scoreArray.push(this);
}
//The following were instances used for testing and nothing more.
// new Score('James', 2);
// new Score('Robert', 6);
// new Score('Yaroslav', 3);
// new Score('Пошелнахуи', 8);
// new Score('James K. Polk', 4);

scoreArray.sort(function(a, b) {
    return parseFloat(b.score) - parseFloat(a.score);
});
