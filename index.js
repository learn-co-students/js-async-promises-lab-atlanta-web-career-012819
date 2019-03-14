const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(q) {
  const questionContainer = document.querySelector('.question-container');
  // const element = document.createElement('p');
  // element.innerText = q.questionText;
  // questionContainer.appendChild(element);
  questionContainer.innerHTML = q.questionText;
}

function askQuestionThen(time) {
  question = questions[0];
  appendQuestion(question);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(question);
    }, time);
  });
}

function removeQuestion() {
  document.querySelector('.question-container').innerHTML = "";
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(response => removeQuestion())
}

function trueAndFalseButtons() {
  return document.querySelector('.true-false-list').querySelectorAll('.btn');
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(button => {
    if (button.classList.contains('hide')) {
      button.classList.remove('hide');
    } else {
      button.classList.add('hide');
    }
  });
}

function displayQuestionOnClick(time) {
  toggleTrueAndFalseButtons();
  askQuestionThen(time).then(response => {
    removeQuestion();
    toggleTrueAndFalseButtons();
  })
}
