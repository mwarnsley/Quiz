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
  {
    "id": "4",
    "question": "What is the difference between undefined and not defined?",
    "codeSnippet": "",
    "options": [
      {
        "id": "1",
        "statement": "Undefined means a variable has been declared and not defined. Not defined means a variable has not yet been declared."
      },
      {
        "id": "2",
        "statement": "They mean the same thing."
      },
      {
        "id": "3",
        "statement": "Undefined means a variable has not been declared or defined. Not Defined means a variable is declared and not defined."
      },
      {
        "id": "4",
        "statement": "All the above."
      }
    ],
    "answer": "1"
  },
  {
    "id": "5",
    "question": "What are the primitive types in Javascript?",
    "codeSnippet": "",
    "options": [
      {
        "id": "1",
        "statement": [
          "Boolean",
          "Null",
          "Undefined"
        ],
      },
      {
        "id": "2",
        "statement": [
          "Boolean",
          "String",
          "Number"
        ],
      },
      {
        "id": "3",
        "statement": [
          "Null",
          "Undefined"
        ],
      },
      {
        "id": "4",
        "statement": [
          "Boolean",
          "Null",
          "Undefined",
          "Number",
          "String"
        ],
      }
    ],
    "answer": "4"
  },
  {
    "id": "6",
    "question": "Does Javascript pass by Reference or by Value?",
    "codeSnippet": "",
    "options": [
      {
        "id": "1",
        "statement": "Value"
      },
      {
        "id": "2",
        "statement": "Reference"
      },
      {
        "id": "3",
        "statement": "By value except for an object which is passed by reference"
      },
      {
        "id": "4",
        "statement": "None of the above"
      }
    ],
    "answer": "3"
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
    ninety_onehundred: false,
    eighty_eightyNine: false,
    seventy_seventyNine: false,
    sixty_sixtyNine: false,
    fiftyNine_below: false,
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
        if (self.quizScore > 89) {
          self.ninety_onehundred = true;
        } else if (self.quizScore > 79 && self.quizScore < 90) {
          self.eighty_eightyNine = true;
        } else if (self.quizScore > 69 && self.quizScore < 80) {
          self.seventy_seventyNine = true;
        } else if (self.quizScore > 59 && self.quizScore < 70) {
          self.sixty_sixtyNine = true;
        } else if (self.quizScore < 60) {
          self.fiftyNine_below = true;
        }
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
      self.ninety_onehundred = false;
      self.eighty_eightyNine = false;
      self.seventy_seventyNine = false;
      self.sixty_sixtyNine = false;
      self.fiftyNine_below = false;
    },
    showIncorrect() {
      // We need to keep the scope of the THIS keyword
      var self = this;
      self.viewIncorrect = true;
    }
  }
});
