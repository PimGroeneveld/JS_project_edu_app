const PubSub = require("../helpers/pub_sub.js");
const Quiz = require("../models/quiz.js")

const QuizView = function(container, question){
 this.questionsContainer = container;
 this.question = question;
}

QuizView.prototype.render = function (flashcard) {
 const questionContainer = document.createElement('div');
 questionContainer.classList.add('questionContainer');

 const foreign = this.createForeignPhrase();
 questionContainer.appendChild(foreign);

 const textBox = document.createElement('input');
 questionContainer.appendChild(textBox);

 const checkAnswerButton = document.createElement('button');
 checkAnswerButton.classList.add('checkButton');
 buttonTitle = document.createTextNode("Check answer");
 checkAnswerButton.appendChild(buttonTitle);
 questionContainer.appendChild(checkAnswerButton);
 checkAnswerButton.addEventListener('click', (event) => {
   const quiz = new Quiz();
   quiz.checkAnswer(textBox.value.toLowerCase(), this.question[0].toLowerCase());
 });

 this.questionsContainer.appendChild(questionContainer);
};

QuizView.prototype.createForeignPhrase = function() {
 const foreign = document.createElement('p');
 foreign.textContent = this.question[1];
 return foreign;
};

QuizView.prototype.renderCorrect = function () {
 const questionContainer = document.createElement('div');
 questionContainer.classList.add('questionContainer');
 const correct = document.createElement('p');
 correct.innerHTML = '<font color="green">Correct!</font><br><img src="images/smiley.png" width="50px" height="50px"/>';
 questionContainer.appendChild(correct);
 this.questionsContainer.appendChild(questionContainer);
};

QuizView.prototype.renderFalse = function () {

 const questionContainer = document.createElement('div');
 questionContainer.classList.add('questionContainer');
 const wrong = document.createElement('p');
 wrong.innerHTML = '<font color="red">Try again</font><br><img src="images/frownie.png" width="50px" height="50px"/>';
 questionContainer.appendChild(wrong);
 this.questionsContainer.appendChild(questionContainer);
};

module.exports = QuizView;
