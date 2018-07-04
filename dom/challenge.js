/**
 * 
 * Your challenge (On 04-06-2018)
 * 
 * Change the game to follow these rules.
 * 
 * 1. A player looses his ENTIRE score when he
 *    rolls 6 two times in a row.
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

var score, roundScore, activePlayer, dice, dice2;

score = [0,0];

roundScore = 0;

activePlayer = 0;

dice = Math.floor((Math.random() * 6)) + 1;

dice2 = 2;

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


// Special one to keep record of the rolls

var diceSet = [];

// For the winning score

var winningScore = 100;


function init() {
   score = [0,0];
   roundScore = 0;
   activePlayer = 0;


   document.querySelector(".dice").style.display = "none";
   document.querySelector(".dice-2").style.display = "none";
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

   // Clearing the storage to avoid error on couting,
   // although this is only important for the first
   // task of this challenge.
    localStorage.clear();
}

init();

// 1 Random Number

// 2 Display the result
var diceDOM = document.querySelector(".dice");
console.log(diceDOM);

// diceDOM.style.display = "block";

diceDOM.src = 'img/dice-' + dice + '.png';

// Now a second dice

var diceDOM2 = document.querySelector(".dice-2");
console.log(diceDOM2);

// diceDOM.style.display = "block";

diceDOM2.src = 'img/dice-' + dice2 + '.png';

// 3 Update the round score if the rolled number was not 1



function newGame() {
   if (confirm("Are you shore you want to start a new game?"))
       // location.reload();
       init();
       
}

// Function that sets a new winning score
function setWScore() {
    var scoreObj = document.getElementById("wScore");
    winningScore = parseInt(scoreObj.value);
}

function rollDice() {
   var dice = Math.floor((Math.random() * 6)) + 1;

   var dice2 = Math.floor((Math.random() * 6)) + 1;

    var res = dice+dice2;

    document.querySelector("#current-"+activePlayer).textContent = res;


    document.querySelector("#current-"+activePlayer).innerHTML = "<em>" + res + "</em>";

    diceDOM.style.display = "block";

    diceDOM.src = 'img/dice-' + dice + '.png';

    diceDOM2.style.display = "block";

    diceDOM2.src = 'img/dice-' + dice2 + '.png';

//    if (keepTrack(dice)) {
    // New version now with two dices
    if((dice !== dice2) || (dice !== 6)){

        
    
        if ((dice !== 1) && (dice2 !== 1)){
    
            //Add score
            roundScore += dice+dice2;
        
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
    
    
        }
        else 
            nextPlayer();
   }
   else {
        // Clearing the score
        score[activePlayer] = 0;

        alert("Two 6! The player " + activePlayer + " will loose all the entire score.");
        document.querySelector("#current-"+activePlayer).textContent = "0";
        document.querySelector("#score-"+activePlayer).textContent = "0";
        nextPlayer();
   }

//    var dice2 = Math.floor((Math.random() * 6)) + 1;

   // document.querySelector("#score-0").textContent = dice;

   

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

   // This is to make shore there are two times 6 only
   // for the same player
   localStorage.clear();

   
}



function holdScore() {
   

   // Storing the score for the current player
   score[activePlayer] += roundScore;

   // Checking if the player has in total more than 100
   if (score[activePlayer] >= winningScore) {
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

// This function is only for the first
// task from the challenge
function keepTrack(dice) {

    var diceSet = [];

    if (localStorage.getItem("set")) {
        var setJSON = localStorage.getItem("set");

        diceSet = JSON.parse(setJSON);

        diceSet.push({"number": dice});
        console.log(diceSet);
        if (diceSet.length > 1) {
            // var val1 = diceSet[diceSet.length-1];
            // var val2 = diceSet[diceSet.length-2];

            var str1 = JSON.stringify(diceSet[diceSet.length-1]);
            var str2 = JSON.stringify(diceSet[diceSet.length-2]);

            var arr1 = str1.split(":");
            var arr2 = str2.split(":");

            var val1 = parseInt(arr1[1].split("}"));
            var val2 = parseInt(arr2[1].split("}"));

            if ((val1 == val2) && (val1 == 6)) {
                alert("Two times 6! The player " + activePlayer + " will loose all the saved score.");
                return false;
            }
        }
        var dJSON = JSON.stringify(diceSet);

        localStorage.setItem("set", dJSON);

    }
    else {
        diceSet.push({"number": dice});
        console.log(diceSet);

        var dJSON = JSON.stringify(diceSet);

        localStorage.setItem("set", dJSON);
    }

    

    

    

    // var diceInfo = localStorage.getItem("set");

    // var numberSet = JSON.parse(diceInfo);
    // console.log(numberSet);

    // document.getElementById("valSet").innerHTML = numberSet;
    return true;
}





