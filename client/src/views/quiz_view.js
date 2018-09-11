const PubSub = require("../helpers/pub_sub.js");
const Quiz = require("../models/quiz.js")

const QuizView = function(container, question){
  this.questionsContainer = container;
  this.question = question;
}

QuizView.prototype.render = function (flashcard) {
  const questionContainer = document.createElement('div');
  questionContainer.classList.add('flashcard');

  const foreign = this.createForeignPhrase();
  questionContainer.appendChild(foreign);

  const textBox = document.createElement('input');
  questionContainer.appendChild(textBox);

  const checkAnswerButton = document.createElement('button');
  buttonTitle = document.createTextNode("Check answer");
  checkAnswerButton.appendChild(buttonTitle);
  questionContainer.appendChild(checkAnswerButton);
  checkAnswerButton.addEventListener('click', (event) => {
    const quiz = new Quiz();
    // need to take data from text box which is check answer parameter
    quiz.checkAnswer(textBox.value, this.question[0]);
    // this.createAnswer();   //answer bit
  })

  // use this for answer but move it?
  // const answer = this.createAnswer();
  // questionContainer.appendChild(answer);

  this.questionsContainer.appendChild(questionContainer);
};

QuizView.prototype.createForeignPhrase = function() {
  const foreign = document.createElement('h2');
  foreign.textContent = this.question[1];
  return foreign;
};

// use for answer
QuizView.prototype.createAnswer = function(){
  const answer = document.createElement('p');
  answer.textContent = this.correctAnswer();
  // console.log(answer.textContent);
  return answer;
};

// use this for answer but move it?
QuizView.prototype.correctAnswer = function(){
  PubSub.subscribe("Quiz:correct-answer", (event) => {
  console.log('event.detail in correctAnswer', event.detail);
  return event.detail;
  });
};


module.exports = QuizView;
