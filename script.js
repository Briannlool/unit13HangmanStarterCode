//Step 1 TASK: create a variable called secretWord and set it to null

// When this function is called the game is staged to be played.
function prepareGame() {
// defines the secret word
  secretWord = ['J','A','V','A','S','C','R', 'I', 'P', 'T'];

  
// Step 1 TASK: call the drawWord and drawHangman function here (inside the prepareGame function).   
drawWord()
drawHangman()  
}

var correctGuesses = [];
var wrongGuesses = [];

// for (var i = 0; i < a.length; i++) {
//     console.log(a[i])
// }

// a.forEach(function(i) {
//     console.log(i)
// })

// This function draws the correct amount of underscores under hangman depending on the length of the word.
   function drawWord() {
    $("#word").empty();
    secretWord.forEach(function(letter) {
        if (correctGuesses.includes(letter)) {
            $("#word").append(letter); 
        } else {
            $("#word").append("_");
        }
    }); 
}

// This function draws the hangman images depending on the number of wrong guesses there are.
function drawHangman() {
}
var wrongImages = ["images/Hangman-1.png", "images/Hangman-2.png", "images/Hangman-3.png", "images/Hangman-4", "images/Hangman-5.png", "images/Hangman-6.png"];

$(document).ready(function() {
    // Step 1 TASK: call the prepare game function and print the secret word to the console. Then run this program.
    prepareGame();
    console.log(secretWord);
    function onKeyDown(event) {
        var letter = event.key.toUpperCase();
        if (secretWord.includes(letter)) {
            correctGuesses.push(letter);
            console.log(correctGuesses);
           drawWord();
        } else {
            wrongGuesses.push(letter);
            var guessesLength = wrongGuesses.length; 
            console.log(wrongGuesses);
            $("#hangman").attr("src", wrongImages[guessesLength - 1]); 
        }
        console.log(correctGuesses);
        console.log(wrongGuesses);
    }
    $("body").keypress(onKeyDown);
    
});
 