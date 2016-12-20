'use strict';
var scoreArray = [];
var leaderList = document.getElementById('leaderList');
function Score (userName, score) {
  this.userName = userName;
  this.score = score ;
  scoreArray.push(this);
}
// The following were instances used for testing and nothing more.
new Score('Sideshow Bob', 2);
new Score('Krusty the Clown', 6);
new Score('Montgomery Burns', 3);
new Score('Mr. Smithers', 8);
new Score('Groundskeeper Willie', 4);

scoreArray.sort(function(a, b) {
  return parseFloat(b.score) - parseFloat(a.score);

});
function renderList() {
  for (var i = 0; i < scoreArray.length; i++) {
  var listItem = document.createElement('li');
  leaderList.appendChild('listItem');


}
}
