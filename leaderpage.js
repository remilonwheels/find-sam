'use strict';
var scoreArray = [];
var leaderList = document.getElementById('leaderList');
var boardKiller = document.getElementById('button');
var redirect = function() { window.location.href = 'leaderpage.html'
};
// function Score (userName, score) {
//   this.userName = userName;
//   this.score = score ;
//   scoreArray.push(this);
//
// }
//
// // The following were instances used for testing and nothing more.
//
// new Score('Sideshow Bob', 2);
// new Score('Krusty the Clown', 6);
// new Score('Montgomery Burns', 3);
// new Score('Mr. Smithers', 8);
// new Score('Groundskeeper Willie', 4);





if (localStorage.scoreArray) {
  scoreArray = JSON.parse(localStorage.scoreArray);
}


scoreArray.sort(function(a, b) {
  return parseFloat(b.score) - parseFloat(a.score);
});
var playerName = [];
var playerScore = [];
var mats = [];

function makeList() {
  for (var i = 0; i < scoreArray.length; i++) {
    playerName[i] = scoreArray[i].userName;
    playerScore[i] = scoreArray[i].score;
    mats.push('<li>' + playerName[i] + ':  '+ playerScore[i] +'</li>');

  }

}
function renderList() {
  for(var i = 0; i < scoreArray.length; i++) {
    console.log(playerName[i] + playerScore[i]);
    leaderList.innerHTML = mats;

  }

}
makeList();
renderList();
