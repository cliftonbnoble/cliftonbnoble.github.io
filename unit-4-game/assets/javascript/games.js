//Global Variables
let wins = 0;
let losses = 0;
let totalScore = 0;
let matchThis = [];

//start game function is called
startGame();
$(document).ready(function() {
//Curry click function
$("#curry").on("click", function() {
    //Add Curry's value to total score
    totalScore += curry;
$("#total-score").text(totalScore);
if (totalScore === matchThis) {
    $("#win-text").show();
    $("#win-picture").show();
    window.setTimeout(startGame, 2500);
    wins++;
    $("#wins").text(wins);
    // startGame();
    // alert("You WIN!!");
} else if (totalScore >= matchThis) {
    $("#lose-text").show();
    $("#lose-picture").show();
    window.setTimeout(startGame, 3000);
    losses++;
    $("#losses").text(losses);
    // startGame();
    // alert("You LOSE :(");
}
});
//Durant Click function
$("#durant").on("click", function(){
    totalScore += durant;
    $("#total-score").text(totalScore);
    if (totalScore === matchThis) {
        $("#win-text").show();
        $("#win-picture").show();
        wins++;
        $("#wins").text(wins);
        window.setTimeout(startGame, 2500);
        // startGame();
        // alert("You WIN!!");
    }
    else if (totalScore >= matchThis) {
        $("#lose-text").show();
        $("#lose-picture").show();
        window.setTimeout(startGame, 3000);
        losses++;
        $("#losses").text(losses);
        // startGame();
        // alert("You LOSE :(");
    }
});
//Klay click function
$("#klay").on("click", function(){
    totalScore += klay;
    $("#total-score").text(totalScore);
    if (totalScore === matchThis) {
        $("#win-text").show();
        $("#win-picture").show();
        window.setTimeout(startGame, 2500);
        wins++;
        $("#wins").text(wins);
        // startGame();
        // alert("You WIN!!");
    }
    else if (totalScore >= matchThis) {
        $("#lose-text").show();
        $("#lose-picture").show();
        window.setTimeout(startGame, 3000);
        losses++;
        $("#losses").text(losses);
        // startGame();
        // alert("You LOSE :(");
    }
});
//Draymond click function
$("#draymond").on("click", function(){
    totalScore += dray;
    $("#total-score").text(totalScore);
    if (totalScore === matchThis) {
        $("#win-text").show();
        $("#win-picture").show();
        window.setTimeout(startGame, 2500);
        wins++;
        $("#wins").text(wins);
        // startGame();
        // alert("You WIN!!");
    }
    else if (totalScore >= matchThis) {
        $("#lose-text").show();
        $("#lose-picture").show();
        window.setTimeout(startGame, 3000);
        losses++;
        $("#losses").text(losses);
        // startGame();
        // alert("You LOSE :(");
    }
});
});

//function to Randomize a number for Match this (20-120) and 4 separate numbers for each player (1-12)
function startGame() {
    $("#win-text").hide();
    $("#lose-text").hide();
    $("#win-picture").hide();
    $("#lose-picture").hide();
    //Random # from 20 - 120
    matchThis = Math.floor(Math.random() * 101) + 19;
    //Random # for the players 1-12
    curry = Math.floor(Math.random() * 12) + 1;
    durant = Math.floor(Math.random() * 12) + 1;
    klay = Math.floor(Math.random() * 12) + 1;
    dray = Math.floor(Math.random() * 12) + 1;
    //Reset Score
    totalScore = 0;
    //Update HTML
    $("#match-this").text(matchThis);
    $("#total-score").text(totalScore);
    $("#wins").text(wins);
    $("#losses").text(losses);
    
}