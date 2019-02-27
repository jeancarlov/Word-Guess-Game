// // window.onload = function () {

//     var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
//           'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
//           't', 'u', 'v', 'w', 'x', 'y', 'z']
// }

// Array that holds the list of options for the player
var userChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

var userChallengeWord = ["Russia, Moscow, France"]

//  List of variables to hold the wins, current-word, number of guess remaining, and letter already guess
var win = 0;
var currentWord = [];
var GuessLeft = [];
var letterGuessed = [];



//variables that will hold changes in html to be display
var winsText = document.getElementById("wins-text");
var userChoiceText = document.getElementById("userchoice-text");
var currentWordText = document.getElementById("currentword-text");
var GuessLeftText = document.getElementById("GuessesLeft-text");
var letterGuessedText = document.getElementById("letterGuessed-text");

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    // Determines which key was pressed by user.
    var userChoices = event.key;

    // Randomly chooses a choice from the options array. This for the user to guess the word.
    var userChallenge = userChallengeWord[Math.floor(Math.random() * userChallengeWord.length)];

    








