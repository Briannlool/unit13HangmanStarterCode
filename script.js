//Step 1 TASK: create a variable called secretWord and set it to null

// When this function is called the game is staged to be played.
function prepareGame() {
// defines the secret word
  secretWord = ['J','A','V','A','S','C','R', 'I', 'P', 'T'];

// Step 1 TASK: call the drawWord and drawHangman function here (inside the prepareGame function).   
drawWord()
drawHangman()  
}


// for (var i = 0; i < a.length; i++) {
//     console.log(a[i])
// }

// a.forEach(function(i) {
//     console.log(i)
// })

// This function draws the correct amount of underscores under hangman depending on the length of the word.
function drawWord() {
    secretWord.forEach(function(){ 
        $("#word").append("_"); 
    });
}

// This function draws the hangman images depending on the number of wrong guesses there are.
function drawHangman() {
    
}

$(document).ready(function() {
// Step 1 TASK: call the prepare game function and print the secret word to the console. Then run this program.
prepareGame();
console.log(secretWord);
    $("body").keydown(function(eventData){
       var guess =  eventData.key.toUpperCase(); 
        secretWord.forEach(function(letter, index, array){
        
        if (guess === letter){
            // guess is correct, replace underscore with letter
        } else {
            // guess is incorrect, add body part
        }
            
        });
    }); 

});

// ["W", "O", "R", "D"]
// var guess = "o";
// convert guess to uppercase - jquery make letter uppercase
// is guess in the "secretWord" array
// forEach