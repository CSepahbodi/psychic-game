//variable for computer's choices
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//variables for wins, losses, guesses, and guesses left
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;

//variable for guessed letters
var guessedLetters = [];

//now we have to have the computer randomly guess a letter from 'var computerChoices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

