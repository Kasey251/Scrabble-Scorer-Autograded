// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   return input.question("Let's play some scrabble! \nEnter a word to score: ");
};

function simpleScorer(word) {
   return word.length;
};

function vowelBonusScorer (word){
   word = word.toUpperCase();
   let letterPoints = 0;
   let vowels = ['A', 'E', 'I', 'O', 'U']

   for (let i = 0; i < word.length; i++) {
      if(vowels.includes(word[i])){ 
		   letterPoints += 3;
      }
      else{
         letterPoints += 1;
      }
	}
	return letterPoints;
};

let scrabbleScorer;

const scoringAlgorithms = [{
      scorerFunction: undefined,
   },
   {
      scorerFunction: undefined,
   },
   {
      scorerFunction: undefined,
   }];

function scorerPrompt(word) {
   let scorer = input.question(`Which scoring algorithm would you like to use?\n
   0 - Simple: One point per character
   1 - Vowel Bonus: Vowels are worth 3 points
   2 - Scrabble: Uses scrabble point system
   Enter 0, 1, or 2: `);
   scoringAlgorithms[scorer].scoreFunction(word);
};

function transform(obj) {
   let newObj = {};
   for(let item in obj){
      let newItem = obj[item]
      for(i = 0; i < newItem.length; i++){
         newObj[newItem[i]] = Number(item)
      };
   };
   return newObj;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   scorerPrompt(initialPrompt());
};

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
