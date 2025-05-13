const questions = [
    {
      question: "Which HTML tag is used to define an unordered list?",
      answers: [
        { text: "<ul>", correct: true },
        { text: "<ol>", correct: false },
        { text: "<li>", correct: false },
        { text: "<list>", correct: false }
      ]
    },
    {
      question: "Which CSS property controls the text size?",
      answers: [
        { text: "font-style", correct: false },
        { text: "text-size", correct: false },
        { text: "font-size", correct: true },
        { text: "text-style", correct: false }
      ]
    },
    {
      question: "Which attribute is used in HTML to provide an alternate text for an image?",
      answers: [
        { text: "title", correct: false },
        { text: "alt", correct: true },
        { text: "src", correct: false },
        { text: "href", correct: false }
      ]
    },
    {
      question: "Which of the following is not a valid CSS unit?",
      answers: [
        { text: "px", correct: false },
        { text: "em", correct: false },
        { text: "pt", correct: false },
        { text: "kg", correct: true }
      ]
    },
    {
      question: "Which JavaScript method adds a new element at the end of an array?",
      answers: [
        { text: "push()", correct: true },
        { text: "pop()", correct: false },
        { text: "shift()", correct: false },
        { text: "unshift()", correct: false }
      ]
    },
    {
      question: "In HTML, which tag is used to create a hyperlink?",
      answers: [
        { text: "<link>", correct: false },
        { text: "<href>", correct: false },
        { text: "<a>", correct: true },
        { text: "<url>", correct: false }
      ]
    },
    {
      question: "Which property is used in CSS to change the background color?",
      answers: [
        { text: "color", correct: false },
        { text: "bgcolor", correct: false },
        { text: "background-color", correct: true },
        { text: "background", correct: false }
      ]
    },
    {
      question: "Which of the following is used to add spacing between elements in CSS?",
      answers: [
        { text: "padding", correct: false },
        { text: "margin", correct: false },
        { text: "border", correct: false },
        { text: "All of the above", correct: true }
      ]
    },
    {
      question: "Which JavaScript keyword is used to declare a variable?",
      answers: [
        { text: "let", correct: false },
        { text: "var", correct: false },
        { text: "const", correct: false },
        { text: "All of the above", correct: true }
      ]
    },
    {
      question: "What does DOM stand for in web development?",
      answers: [
        { text: "Document Object Model", correct: true },
        { text: "Data Object Model", correct: false },
        { text: "Desktop Object Management", correct: false },
        { text: "Document Oriented Method", correct: false }
      ]
    }
  ];
  const questionContainer = document.getElementById("question-container");
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  const scoreContainer = document.getElementById("score-container");
  const scoreElement = document.getElementById("score");
  let currentQuestionIndex = 0;
  let score = 0;
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreContainer.classList.add("hide");
    nextButton.innerText = "Next";
    showQuestion();
  }
  function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      answerButtons.appendChild(button);
    });
  }
  function resetState() {
    nextButton.classList.add("hide");
    answerButtons.innerHTML = "";
  }
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("wrong");
    }
    Array.from(answerButtons.children).forEach(button => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextButton.classList.remove("hide");
  }
  function showScore() {
    resetState();
    questionElement.innerText = "Quiz Completed!";
    scoreContainer.classList.remove("hide");
    scoreElement.innerText = `${score} / ${questions.length}`;
    nextButton.innerText = "Restart";
    nextButton.classList.remove("hide");
  }
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });
startQuiz();  