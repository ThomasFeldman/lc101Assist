// Requirements
// Ask the candidate to enter their name
const input = require('readline-sync');
let name = input.question("What is your name candidate? ");

// Use a loop to ask five questions, one at a time, to the candidate
let questions = ["What is your name? ", "What is your quest? ", "What is your favorite colour? ",
                 "What is the capital of Assyria? ", "What is the airspeed velocity of an unladen swallow? "];
let answers = [];

for(i=0; i<questions.length; i++){
    let answer = input.question(questions[i]);
    answers = answers.push(answer);
}
console.log(answers);
// Collect the candidate's answers
// Check those answers for accuracy (case insensitive equality check)
// Calculate the candidate's overall percentage
// Determine if the candidate did well enough to enter our program (need >= 80% to pass)
// Display the results.