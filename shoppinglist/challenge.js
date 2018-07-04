/**
 * 
 * Your challenge
 * 
 * Change the game to follow these rules.
 * 
 * 1. A player looses his ENTIRE score when he
 *    rolls two 6 values in a row.
 *    After that, it's the next player's turn.
 *    Always save the previous dice roll in a 
 *    separate variable.
 * 
 * 2. Add an input field to the HTML where players
 *    can set the winning score. This way they can
 *    change the predefined score of 100. 
 *    Hint: You can read that value with the value 
 *    property in javascript. This is good opportunity
 *    to use google to figure this out.
 * 
 * 3. Add another dice to the game, so that there 
 *    are two dices now. The player looses his
 *    current score when one of them is a 1.
 *    Hint: You will need CSS to position the second 
 *    dice, so take a look at the CSS code for the
 *    first one.
 * 
 * 
 */


 /**
 * 
 * Game Rules:
 * 
 * The game has 2 players, playing in rounds.
 * In each turn, a player rolls a dices as many times as he wishes. 
 * Each result get added to his round score.
 * 
 * But, if the player rolls a 1, all his Round Score get lost.
 * 
 * The player can choose to 'Hold' which means that his Round score gets added to his Global Score. After that, it's the next player's turn.
 * 
 * The first player to reach 100 points on Global score, wins the game.
 * 
 * 
 * Learning important aspects:
 * 
 * 1 - How to create our fundamental game variables.
 * 2 - How to generate random number
 * 3 - How to manipulate the DOM
 * 4 - How to read from the DOM
 * 5 - How to change CSS styles. 
 * 
 */

var score, roundScore, activePlayer, dice;

score = [0,0];

roundScore = 0;

activePlayer = 0;

dice = Math.floor((Math.random() * 6)) + 1;

console.log(dice);


//  var tempPlayerScore = document.getElementById("score-0").innerHTML;

//  console.log('​tempPlayerScore', tempPlayerScore);


//  document.querySelector("#score-0").textContent = dice;

//  document.querySelector("#current-0").textContent = dice;


//  document.querySelector("#current-"+activePlayer).innerHTML = "<em>" + dice + "</em>";

//  document.querySelector('.dice').style.display = 'none'; Not working

/**
* 
* - Hold button click
* - Roll dic button click.
* - Make method init where you can describe initialize
* for the game.
* - Make method nextPlayer() where you can put logic 
* related to the next player.
* 
* 
*/


function init() {
   score = [0,0];
   roundScore = 0;
   activePlayer = 0;


   document.querySelector(".dice").style.display = "none";
   document.getElementById("score-0").textContent = "0";
   document.getElementById("score-1").textContent = "0";
   document.getElementById("current-0").textContent = "0";
   document.getElementById("current-1").textContent = "0";

   document.getElementById("name-0").textContent = "Player 1";
   document.getElementById("name-1").textContent = "Player 2";

   document.querySelector(".player-0-panel").classList.remove("active");
   document.querySelector(".player-1-panel").classList.remove("active");

   document.querySelector(".player-0-panel").classList.add("active");
   // document.querySelector(".player-1-panel").classList.add("active");
}

init();

// 1 Random Number

// 2 Display the result
var diceDOM = document.querySelector(".dice")
;
console.log(diceDOM);

// diceDOM.style.display = "block";

diceDOM.src = 'img/dice-' + dice + '.png';

// 3 Update the round score if the rolled number was not 1



function newGame() {
   if (confirm("Are you shore you want to start a new game?"))
       // location.reload();
       init();
       
}


function rollDice() {
   var dice = Math.floor((Math.random() * 6)) + 1;

   // document.querySelector("#score-0").textContent = dice;

   document.querySelector("#current-"+activePlayer).textContent = dice;


   document.querySelector("#current-"+activePlayer).innerHTML = "<em>" + dice + "</em>";

   diceDOM.style.display = "block";

   diceDOM.src = 'img/dice-' + dice + '.png';

   if (dice !== 1) {

       //Add score
       roundScore += dice;
   
       document.querySelector('#current-' + activePlayer).textContent = roundScore;


   }
   else {
   
       // Change the player
       // activePlayer === 0 ? activePlayer = 1 :  activePlayer = 0;
   
       // // to show zero value instead of the undefined value
       //  document.getElementById('current-0').textContent = '0';
       //  document.getElementById('current-1').textContent = '0';
   
       // // diceDOM.style.display = 'none';
   
       // // change the panel activation and 
       // // show active player indication
       // // document.querySelector('.player-0-panel').classList.remove('active');
   
       // // document.querySelector('player-1-panel').classList.add('active');
   
   
       // document.querySelector(".player-0-panel").classList.toggle('active');
   
       // document.querySelector(".player-1-panel").classList.toggle("active");
   
       nextPlayer();
   }

}





function nextPlayer() {

   // How current score will be zero
   roundScore = 0;

   // Change the player
   activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;

   // To show zero value instead of the undefined value
   document.getElementById("current-0").textContent = "0";
   document.getElementById("current-1").textContent = "0";


   document.querySelector(".player-0-panel").classList.toggle("active");
   document.querySelector(".player-1-panel").classList.toggle("active");
}

function holdScore() {
   
   // Storing the score for the current player
   score[activePlayer] += roundScore;

   // Checking if the player has in total more than 100
   if (score[activePlayer] > 100) {
       alert("The player number " + activePlayer + " is the winner of the game.");
       alert("A new game will start.");
       init();
   }
   // If not, the next player starts
   else {
       
       document.querySelector("#score-" + activePlayer).textContent = score[activePlayer];
       nextPlayer();
   }
}



