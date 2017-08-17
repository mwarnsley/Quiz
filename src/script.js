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
        "statement": "A widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML."
      },
      {
        "id": "3",
        "statement": "An object-oriented computer programming language commonly used to create interactive effects within web browsers."
      },
      {
        "id": "4",
        "statement": "An object-oriented programming language from Microsoft that aims to combine the computing power of C++ with the programming ease of Visual Basic."
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
    currentAnswer: '',
    correctAnswers: [],
    quizScore: '',
    rightAnswers: '',
    wrongAnswers: '',
  },
  computed: {
    questionsList: function() {
      // Make sure we don't lose scope of the THIS keyword
      var that = this;
      return that.questions.filter(function(question, index) {
        return Number(question.id) === that.currentQuestion;
      });
    }
  },
  methods: {
    nextQuestion: function() {
      // Make sure we don't lose scope of the THIS keyword
      var that = this;
      var currentQuestion = that.questions.find(function(question) {
        return Number(question.id) === that.currentQuestion;
      });
      // Check and see if there is a currentAnswer selected. If not we need to not proceed
      if (!that.currentAnswer) {
        that.error = true;
        return;
      }
      // Set the errors back to false if there has been an answer selected
      that.error = false;
      // Check to see if the answer selected matches the correct answer and if so push it onto the correctAnswers array
      if (Number(currentQuestion.answer) === Number(that.currentAnswer)) {
        that.correctAnswers.push(currentQuestion);
      }
      that.currentQuestion += 1;
      // If we get to the last question instead of Next Question we have Submit Quiz
      if (that.currentQuestion === that.endQuiz) {
        that.buttonText = 'Submit Quiz';
      } else if (that.currentQuestion - 1 === that.endQuiz) {
        that.submitted = true;
        that.quizScore = ((that.correctAnswers.length / that.questions.length) * 100).toFixed(2);
        that.rightAnswers = that.correctAnswers.length;
        that.wrongAnswers = (that.questions.length - that.correctAnswers.length);
      }
    },
    tryAgain() {
      // We need to reset all of the data back to normal to start over again
      var that = this;
      that.currentQuestion = 1;
      that.buttonText = 'Next Question';
      that.submitted = false;
      that.currentAnswer = '';
      that.correctAnswers = [];
      that.quizScore = '';
      that.rightAnswers = '';
      that.wrongAnswers = '';
    }
  }
});
