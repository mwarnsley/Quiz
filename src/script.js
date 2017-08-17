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
  },
  computed: {
    questionsList: function() {
      // Make sure we don't lose scope of the THIS keyword
      var that = this;
      return this.questions.filter(function(question, index) {
        return Number(question.id) === that.currentQuestion;
      });
    }
  },
  methods: {
    nextQuestion: function() {
      // Make sure we don't lose scope of the THIS keyword
      var that = this;
      that.currentQuestion += 1;
      console.log(that.currentQuestion, that.endQuiz);
      if (that.currentQuestion === that.endQuiz) {
        that.buttonText = 'Submit Quiz';
      } else if (that.currentQuestion - 1 === that.endQuiz) {
        that.submitted = true;
      }
    }
  }
});
