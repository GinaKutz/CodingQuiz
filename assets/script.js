const startBtn = document.getElementById('start-btn');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const timerElement = document.getElementById('timer');

const quizData = [
  // Add your quiz questions here as objects
  {
    question: 'What is a string',
    answers: ['a sequence of characters', 'a boolean', 'a sum of numbers', 'an image'],
    correctAnswer: '1'
  },
  // Add more questions similarly
];

let currentQuestionIndex = 0;
let timer;
let timeLeft = 60; // Time in seconds

function startQuiz() {
  startBtn.style.display = 'none';
  displayQuestion();
  timer = setInterval(updateTimer, 1000);
}

function displayQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  answersElement.innerHTML = '';
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.textContent = answer;
    button.addEventListener('click', () => checkAnswer(answer));
    answersElement.appendChild(button);
  });
}

function checkAnswer(answer) {
  const currentQuestion = quizData[currentQuestionIndex];
  if (answer === currentQuestion.correctAnswer) {
    // Handle correct answer
    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  } else {
    // Handle incorrect answer
    timeLeft -= 10; // Subtract 10 seconds for incorrect answer
  }
}

function updateTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    timerElement.textContent = timeLeft;
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timer);
  // Implement functionality to save initials and score
  // You can prompt the user for initials and store their score
  // Example: const initials = prompt('Enter your initials:');
  // Save the score somewhere or display it
}

startBtn.addEventListener('click', startQuiz);