const startBtn = document.getElementById('start-btn');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const timerElement = document.getElementById('timer');

const quizData = [
  // Add your quiz questions here as objects
  {
    question: 'What does HTML stand for?',
    answers: ['Hyperlinks and Text Markup Language', 'Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinking Text Markup Language'],
    correctAnswer: 'Hyper Text Markup Language'
  },

  {
    question: 'Which of the following is not a programming language?',
    answers: ['Python', 'CSS', 'Java', 'Ruby'],
    correctAnswer: 'CSS'
    
  
  },


  {
    question: 'What is the result of 5 + "5" in JavaScript?',
    answers: ['10', '55', '"10"', 'Error'],
    correctAnswer: '"10"'
  },


  {
    question: 'What does CSS stand for?',
    answers: ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'],
    correctAnswer: 'Cascading Style Sheets'
  },


  {
    question: 'In Python, what is used to indicate a block of code following a conditional statement or loop?',
    answers: ['Parenthesis', 'Curly Brackets', 'Indentation', 'Quotation Marks'],
    correctAnswer: 'Indentation'
  },


  {
    question: 'Which symbol is used for a single-line comment in most programming languages?',
    answers: ['//', '#', '--', '/**/'],
    correctAnswer: '//'
  },


  {
    question: 'What is the purpose of the "git" version control system?',
    answers: ['To write and execute code', 'To manage and track changes in files', 'To design user interface', 'To optimize website loading speed'],
    correctAnswer: 'To manage and track changes in files'
  },

  {
    question: 'What does the acronym API stand for in programming?',
    answers: ['Application Programming Interface', 'Advanced Programming Interface', 'Automated Program Integration', 'All Purpose Interface'],
    correctAnswer: 'Application Programming Interface'
  },


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

    
    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      displayQuestion();
    } else {
      function stopTimer(){
        
      }

      alert('Good job! Quiz Complete! Insert your name and score in time remaining!');
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
    alert('Sorry, you have run out of time!');
  }
}

function endQuiz() {
  clearInterval(timer);

   // Implement functionality to save initials and score
  // You can prompt the user for initials and store their score
  // Example: const initials = prompt('Enter your initials:');
  // Save the score somewhere or display it

  const userName = nameInput.value || "User";
  const timeRemaining = seconds.value || "Score";

 
}

startBtn.addEventListener('click', startQuiz);