/*

- Create an app that simulates the time-honored game "Rock Paper Scissors Lizard Spock"

- Your game should allow the user to select a hand shape and play against the computer (which will select a random hand shape)

- The game should notify the user of the outcome, and should offer the user the option to play again

- The game should tell the user how they won or lost (e.g., display the message "Paper disproves Spock!")

*/

// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// Rock crushes Scissors


var sget = require("sget");

	
var choices = ["rock", "paper", "scissors", "lizard","spock"];
var userChoice;
var compChoice;
// var compAnswer = [];




var compGuess = function () {
	compChoice = choices[Math.floor(Math.random() * choices.length)];
	if (compChoice === 0) {
		compChoice = "rock";
	} else if (compChoice == 1) {
		compChoice = "paper";
	} else if (compChoice == 2) {
		compChoice = "scissors";
	} else if (compChoice == 3) {
		compChoice = "lizard";
	} else if (compChoice == 4) {
		compChoice = "spock";
	}
	console.log(compChoice);
};


var checkGuess = function() {
    
		if (userChoice == compChoice) {
			console.log("Tie!");
		} else if (userChoice == "rock" && compChoice == "scissors") {
			console.log("Rock crushes scissors! You win!");
		} else if (userChoice == "rock" && compChoice == "paper") {
			console.log("Paper covers rock! You lose.");
		} else if (userChoice == "paper" && compChoice == "rock") {
			console.log("Paper covers rock! You win!");
		} else if (userChoice == "paper" && compChoice == "scissors") {
			console.log("Scissors cut paper! You lose.");
		} else if (userChoice == "scissors" && compChoice == "rock") {
			console.log("Rock crushes scissors! You lose.");
		} else if (userChoice == "scissors" && compChoice == "paper") {
			console.log("Scissors cut paper! You win!");
		} 

	playAgain();
};

var playAgain = function () {
	var playAgain = sget("\nWould you like to play again (y / n)?").trim();
	playAgain = playAgain.toLowerCase();

		if (playAgain == "y") {
			mainGame();
		} else if (playAgain == "n") {
			exit();
		} else {
			console.log("Invalid input.");
			playAgain();
		}
};


var exit = function() {
	console.log("Thanks for playing. Goodbye!");
	process.exit();
};


var mainGame = function () {
	console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock.\n");
	var userChoice = sget("Do you choose rock, paper, scissors, lizard, or Spock? ");
	userChoice = userChoice.toLowerCase();
	compGuess();
	console.log("You chose " + userChoice);
	console.log("The computer chose " + compChoice);
	checkGuess();
};

mainGame();

