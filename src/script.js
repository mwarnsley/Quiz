var questions = [
  {
    "id": "1",
    "question": "What is Javascript?",
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

new Vue({
  el: '#app',
  data: {
    questions: questions,
  },
  methods: {

  }
});
