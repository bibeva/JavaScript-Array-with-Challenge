// Create a multidimensional array to hold quiz questions and answers
const questions = [
  ['How many sides does a triangle have?', '3'],
  ['What is the square root of 16?', '4'],
  ['How many colors are there in a rainbow?', '7'],
  ['How many days are there in a week?', '7']
]

// Store the number of questions answered correctly
let correct = [];
let incorrect = [];
let correctAnswer = 0;

/* 
  Use a loop to cycle through each question
  - Present each question to the user
  - Compare user's response to answer in the array
  - If the response matches the answer, the number of correctly answer question increment by 1
*/
for(let i = 0; i < questions.length; i++) {
  let question = questions[i][0];
  let answer = questions[i][1];

  let response = prompt(question);
  
  if(response === answer) {
    correctAnswer++;
    correct.push(question);
  } else {
    incorrect.push(question);
  }
}

function createListItem(arr) {
  let items = '';
  for(let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`
  }
  return items;
}

// Display the number of correct answers
document.querySelector('main').innerHTML = `
<h2>You got ${correctAnswer} correct out of ${questions.length} questions.</h2>
<h4>You got these questions right</h4>
<ol>
  ${createListItem(correct)}
</ol>
<h4>You got these questions wrong</h4>
<ol>
  ${createListItem(incorrect)}
</ol>
`