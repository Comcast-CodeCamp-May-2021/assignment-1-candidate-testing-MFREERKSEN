const input = require('readline-sync');
// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName //
let candidateName = "";
// console.log({candidateName});
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [
"Who was the first American woman in space? ",
"True or false: 5 kilometer == 5000 meters? ",
"(5 + 3)/2 * 10 = ? ",
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
"What is the minimum crew size for the ISS? "
];
let correctAnswers = [
"Sally Ride",
"true",
"40",
"Trajectory",
"3"
];
let candidateAnswers = [];


function askForName(){
  candidateName = input.question("What is your Name?: ");
  // TODO 1.1b: Ask for candidate's name //
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for(let i = 0; i < questions.length;i++){
    candidateAnswers.push(input.question(questions[i]).toLowerCase());
  }
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade = 0
  let numberOfCorrectAnswers = 0
  
  for(let i = 0; i < questions.length ; i ++){
    console.log(`\n${questions[i]}\nYour Answer: ${candidateAnswers[i]} \nCorrect Answer: ${correctAnswers[i]}`)
        
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      numberOfCorrectAnswers+=1
    } else{
    
    }
    grade =(numberOfCorrectAnswers/questions.length)*100
  }
  console.log(`>>> Overall Grade: ${grade} % (${numberOfCorrectAnswers} of ${questions.length}) <<<`);
  
  if (grade >= 80){
    console.log (">>> Status: PASSED <<<");
  }else{
    console.log(">>> Status: FAILED <<<");
  }
  return grade
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Candidate Name: ${candidateName}\n`)
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};