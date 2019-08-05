
// Array of options 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables to hold the number of wins, losses, guesses left and guesses so far
var wins = 0;
var losses = 0;
var guessleft = 9;
var yourguessessofar = [];

var GuessThinkingletter = [];

// variables references to HTML
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessleftText = document.getElementById("guessesleft-text");
var yourguessessofarText = document.getElementById("yourguessessofar-text");
var GuessWhatLetterimThinkingOfText = document.getElementById("GuessWhatLetterimThinkingOf");


// Function to Run
document.onkeyup = function(event) {
 
    // Determines which key was pressed.
    var userGuess = event.key;

   
    console.log(userGuess);
    // Random computer guess
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log(computerGuess);

    
	
    
    
    
    // Outcome of game and increments
 

  if ((userGuess === "a") || (userGuess === "h") || (userGuess === "o") || (userGuess === "u") 
    || (userGuess === "b") || (userGuess === "i") || (userGuess === "p") || (userGuess === "v") 
    || (userGuess === "c") || (userGuess === "j") || (userGuess === "q") || (userGuess === "w") 
    || (userGuess === "d") || (userGuess === "k") || (userGuess === "r") || (userGuess === "x") 
    || (userGuess === "e") || (userGuess === "l") || (userGuess === "s") || (userGuess === "y") 
    || (userGuess === "f") || (userGuess === "m") || (userGuess === "t") || (userGuess === "z") 
    || (userGuess === "g") || (userGuess === "n")) {
     

     if (userGuess === computerGuess) {
            wins++; 
            console.log(wins);
            
        } else if (guessleft) {
            guessleft--; 
          
            
            
            
            

        } else {
                
          
              
            
                guessleft = 9;
                yourguessessofar = [];
                wins;
                losses++;
                
              }
            
    
         console.log(losses);
           
               
       

         
            
        
        // Hide the directions
        directionsText.textContent = "";

        // Display game
        GuessWhatLetterimThinkingOfText.textContent = "Guess what letter I'm thinking of";
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessleftText.textContent = "Guesses Left: " + guessleft;
        userChoiceText.textContent = "Your Guesses so far: " + userGuess;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
       
     }
   
};