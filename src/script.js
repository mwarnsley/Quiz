var questions = [
  {
    "id": "1",
    "question": "What is Javascript?",
    "codeSnippet": "",
    "options": [
      {
        "id": "1",
        "statement": "A programming language and computing platform first released by Sun Microsystems in 1995."
      },
      {
        "id": "2",
        "statement": "A widely-used open source general-purpose scripting language self is especially suited for web development and can be embedded into HTML."
      },
      {
        "id": "3",
        "statement": "An object-oriented computer programming language commonly used to create interactive effects within web browsers."
      },
      {
        "id": "4",
        "statement": "An object-oriented programming language from Microsoft self aims to combine the computing power of C++ with the programming ease of Visual Basic."
      }
    ],
    "answer": "3"
  },
  {
    "id": "2",
    "question": "What is the difference between == and ===?",
    "codeSnippet": "",
    "options": [
      {
        "id": "1",
        "statement": "Double equals compares just type, whereas triple equals compares type and equality."
      },
      {
        "id": "2",
        "statement": "Double equals compares just equality, whereas triple equals compares type and equality."
      },
      {
        "id": "3",
        "statement": "Double equals compares type and equality, whereas triple equals compares just type."
      },
      {
        "id": "4",
        "statement": "There is no difference, they mean the same thing."
      }
    ],
    "answer": "2"
  },
  {
    "id": "3",
    "question": "What will be the output of the following code?",
    "codeSnippet": [
      'var a = 3;',
      'var b = 4;',
      'function addNumbers(a, b) { a = a; b = 5; console.log(a + b); }',
      'addNumbers(a, b);',
      'console.log(a);',
      'console.log(b);'
    ],
    "options": [
      {
        "id": "1",
        "statement": "8, 3, 4"
      },
      {
        "id": "2",
        "statement": "7, 3, 4"
      },
      {
        "id": "3",
        "statement": "8, 3, 5"
      },
      {
        "id": "4",
        "statement": "NaN, 3, 4"
      }
    ],
    "answer": "1"
  },
];

// Setting up the vue instance for the quiz application
new Vue({
  el: '#app',
  data: {
    questions: questions,
    currentQuestion: 1,
    buttonText: 'Next Question',
    endQuiz: questions.length,
    submitted: false,
    error: false,
    viewIncorrect: false,
    viewIncorrectBtn: false,
    currentAnswer: '',
    correctAnswers: [],
    incorrectAnswers: [],
    quizScore: '',
    rightAnswers: '',
    wrongAnswers: '',
  },
  computed: {
    questionsList: function() {
      // Make sure we don't lose scope of the THIS keyword
      var self = this;
      return self.questions.filter(function(question, index) {
        return Number(question.id) === self.currentQuestion;
      });
    }
  },
  methods: {
    nextQuestion: function() {
      // Make sure we don't lose scope of the THIS keyword
      var self = this;
      var currentQuestion = self.questions.find(function(question) {
        return Number(question.id) === self.currentQuestion;
      });
      // Check and see if there is a currentAnswer selected. If not we need to not proceed
      if (!self.currentAnswer) {
        self.error = true;
        return;
      }
      // Set the errors back to false if there has been an answer selected
      self.error = false;
      // Check to see if the answer selected matches the correct answer and if so push it onto the correctAnswers array
      if (Number(currentQuestion.answer) === Number(self.currentAnswer)) {
        self.correctAnswers.push(currentQuestion);
      } else {
        self.incorrectAnswers.push(currentQuestion);
      }
      self.currentQuestion += 1;
      // If we get to the last question instead of Next Question we have Submit Quiz
      if (self.currentQuestion === self.endQuiz) {
        self.buttonText = 'Submit Quiz';
      } else if (self.currentQuestion - 1 === self.endQuiz) {
        self.submitted = true;
        self.quizScore = ((self.correctAnswers.length / self.questions.length) * 100).toFixed(2);
        self.rightAnswers = self.correctAnswers.length;
        self.wrongAnswers = (self.questions.length - self.correctAnswers.length);
        if (self.incorrectAnswers.length > 0) {
          self.viewIncorrectBtn = true;
        }
      }
    },
    tryAgain() {
      // We need to keep the scope of the THIS keyword
      var self = this;
      // We need to reset all of the data back to normal to start over again
      self.currentQuestion = 1;
      self.buttonText = 'Next Question';
      self.submitted = false;
      self.viewIncorrect = false;
      self.currentAnswer = '';
      self.correctAnswers = [];
      self.incorrectAnswers = [];
      self.quizScore = '';
      self.rightAnswers = '';
      self.wrongAnswers = '';
    },
    showIncorrect() {
      // We need to keep the scope of the THIS keyword
      var self = this;
      self.viewIncorrect = true;
    }
  }
});
