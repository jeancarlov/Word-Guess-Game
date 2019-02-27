
// Array that holds the list of options for the player
var userChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

// array that holds the challenging words

var userChallengeWord = ["Russia", "Moscow", "France"]

//  List of variables for the gam  to hold the wins, current-word, number of guess remaining, and letter already guess
var win = 0;
var currentWord = '';
var currentWordPlaceHolder = [];  
var GuessLeft = 10;   /// check this code
var letterGuessed = []; // check this code
var gameRunning = false



//variables that will hold changes in html to be display on the DOM
var winsText = document.getElementById("wins-text");
var userChoiceText = document.getElementById("userchoice-text");
var currentWordText = document.getElementById("currentWord-text");
var GuessLeftText = document.getElementById("GuessesLeft-text");
var letterGuessedText = document.getElementById("letterGuessed-text");
 

//reset funtion for the new word in the browser
funtion newGame() {
    //reset game with the new word
    gameRunning = true;
    letterGuessed = [];
    currentWordPlaceHolder = [];

    // new word for the reset
    currentWord = userChallengeWord[Math.floor(Math.random() * userChallengeWord.length)]; 

}

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    // Determines which key was pressed by user.
    var userChoices = event.key;

    // Randomly chooses a choice from the options array. This for the user to guess the word.
    var userChallenge = userChallengeWord[Math.floor(Math.random() * userChallengeWord.length)];
    //split the string into an array

    //compare with the user 

//check if the letter is incorrect

    








