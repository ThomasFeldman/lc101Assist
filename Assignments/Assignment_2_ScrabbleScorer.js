// Code your transform function here:
function transform(object){
    let newScores = [];
    for(item in oldPointStructure){
        for(i=0; i<oldPointStructure[item].length; i++){
            newScores[oldPointStructure[item][i].toLowerCase()] = Number(item);
        }
    }
    return newScores;
}

// Code your initialPrompt function here:
function initialPrompt(){
    console.log('Welcome to the Scrabble scor calculator!');
    console.log('');
    console.log('Which scoring algorithm would you like to use?');
    console.log('');
    console.log('0 - Scrabble: The traditional scoring algorithm.');
    console.log('1 - Simple Score: Each letter is worth 1 point.');
    console.log('2 - Bonus Vowels: Vowels are worth 3 pts, and consonants are 1 pt.');
    
    let input = require('readline-sync');
    let choice = input.question('Enter 0, 1, or 2: ');
    while(choice<0 || choice>2 ){
      console.log('Invalid choice!');
      choice = input.question('Please Enter 0, 1, or 2: ');
    }

    return choice;
}

// Code your runProgram function here:
function runProgram(){}

// Here is the oldPointStructure object:
const oldPointStructure = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
 };
 
 let newPointStructure = transform(oldPointStructure);
 // Use the transform function to create the newPointStructure object here:
 
 
 // Create your scoringAlgorithms array here:

 let scoringAlgorithms = [simpleScoreObj, bonusVowelsObj, scrabbleScoreObj];

 // Simple Score: Define a function that takes a word as a parameter and returns a score. Each letter within the word is worth 1 point.
function simpleScore(word){
    let score = 0;
    word = word.split('');
    for(i=0; i<word.length; i++){
        score += 1;
    }
    return score;
}
 // Bonus Vowels: Define a function that takes a word as a parameter and returns a score. Each vowel within the word is worth 3 points, and each consonant is worth 1 point.
function bonusVowels(word){
    let score = 0;
    let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    word = word.toLowerCase().split('');

    for(i=0; i<word.length; i++){
        if(consonants.includes(word[i])){
            score += 1;
        }
        if(vowels.includes(word[i])){
            score += 3;
        }
    }

    return score;
}
 // Scrabble Score: Define a function that takes a word and newPointStructure as parameters and returns a score. The function uses the data stored in newPointStructure to determine the point value for the word.
function scrabbleScore(word, newPointStructure){
    let score = 0;
    word = word.toLowerCase().split('');

    for(items in newPointStructure){
        for(i=0; i<word.length; i++){
          if(word[i]==items){
            score += newPointStructure[items];
          }
        }
      }

    return score;
}
 

// Create an object for each of the three scoring options. Each object should 
// contain three keys: name, description, and scoreFunction.
let simpleScoreObj = {
    name: 'Simple Score';
    description: 'Each letter is 1 point.';
    scoreFunction: 'A function with a word parameter that returns a score.';
};

let bonusVowelsObj = {
    name: 'Bonus Vowels';
    description: 'Vowels are 3 pts, consonants are 1 pt.';
    scoreFunction: 'A function with a word parameter that returns a score based on the number of vowels and consonants.';
};

let scrabbleScoreObj = {
    name: 'Scrabble';
    description: 'The traditional scoring algorithm.';
    scoreFunction: 'Uses the newPointStructure object to determine the score for a given word.';
};

 // Call the runProgram function here:
 