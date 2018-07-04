// iife

/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

*/
// game();

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score + goodLuck >= 5);
})(2);

