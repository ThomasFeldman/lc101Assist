// Code your transform function here:
function transform(object){
    let newPointStructure = [];
    for(item in oldPointStructure){
        for(i=0; i<oldPointStructure[item].length; i++){
            newPointStructure[oldPointStructure[item][i]] = Number(item);
        }
    }
    return newPointStructure;
    // if(choice == 0){
    //     let newPointStructure = [];
    //     for(item in oldPointStructure){
    //         for(i=0; i<oldPointStructure[item].length; i++){
    //             newPointStructure[oldPointStructure[item][i]] = Number(item);
    //         }
    //     }
    //     return newPointStructure;
    // }else if(choice == 1){

    // }else if(choice == 2){

    // }else{
    //     return 'somethin messed up!'
    // }
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
 
 // Use the transform function to create the newPointStructure object here:
 
 
 // Create your scoringAlgorithms array here:
 
 
 // Call the runProgram function here:
 