//Questions are From Monty Python's Holy Grail, not the official LaunchCode Assignment Questions.

// Requirements
// Ask the candidate to enter their name
const input = require('readline-sync');
let name = input.question("What is your name candidate? ");
console.log(name);
console.log('');
// Use a loop to ask five questions, one at a time, to the candidate
let questions = ["What is your name? ", "What is your quest? ", "What is your favorite colour? ",
                 "What is the capital of Assyria? ", "What is the airspeed velocity of an unladen swallow? "];

let correctAnswer = ['Thomas', 'Holy Grail', 'Blue', 'Idk', '3'];

let candidateAnswers = [];

let grade = 0;

for(i=0; i<questions.length; i++){
    let answer = input.question(questions[i]);
    
    // Check those answers for accuracy (case insensitive equality check)
    if(answer.toLowerCase() == correctAnswer[i].toLowerCase()){
      grade += 20;
    }
    // Collect the candidate's answers
    candidateAnswers.push(answer);

    console.log(`Your Answer: ${answer}`);
    console.log(`Correct Answer: ${correctAnswer[i]}`);
    console.log('');
}

// Calculate the candidate's overall percentage
// Display the results.// Refer to the online book to access detailed instructions for this project.
console.log(`>>> Overall Grade: ${grade}% (${grade/20} out of 5 responses correct) <<<`);

// Determine if the candidate did well enough to enter our program (need >= 80% to pass)
if(grade >= 80){
    console.log('>>> Status: PASSED <<<');
}else{
    console.log('>>> Status: FAILED <<<');
}