// Questions and answers data
const triviaData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      correctAnswer: 0
    },
    {
      question: "Which country is known for the Great Wall?",
      options: ["China", "India", "Japan", "Egypt"],
      correctAnswer: 0
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yuan", "Yen", "Euro", "Rupee"],
      correctAnswer: 1
    },
    {
      question: "Which city is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      correctAnswer: 2
    },
    {
      question: "In which country is the Taj Mahal located?",
      options: ["India", "Pakistan", "Bangladesh", "Nepal"],
      correctAnswer: 0
    },
    {
        question: "Which city is home to the Colosseum?",
        options: ["Rome", "Milan", "Florence", "Naples"],
        correctAnswer: 0
      },
      {
        question: "Which country is known for Oktoberfest?",
        options: ["Italy", "Germany", "Japan", "Peru"],
        correctAnswer: 1
      },
      {
        question: "What is the traditional Japanese garment called?",
        options: ["Kimono", "Lederhosen", "Poncho", "Sari"],
        correctAnswer: 0
      },
      {
        question: "Which of these countries is famous for Machu Picchu?",
        options: ["Italy", "Germany", "Japan", "Peru"],
        correctAnswer: 3
      },
      {
        question: "Which country is home to the Eiffel Tower?",
        options: ["Italy", "Germany", "Japan", "France"],
        correctAnswer: 3
      }
    // Add more questions here...
  ];
  
  // Get HTML elements
  const questionContainer = document.getElementById("question-container");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  const restartButton = document.getElementById("restart-button");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Initialize the game
  function initGame() {
    currentQuestionIndex = 0;
    score = 0;
    resultElement.textContent = "";
    scoreElement.textContent = "Score: 0";
    restartButton.style.display = "none";
    showQuestion();
  }
  
  // Show a new question
  function showQuestion() {
    const currentQuestion = triviaData[currentQuestionIndex];
  
    questionElement.textContent = currentQuestion.question;
  
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
      const optionElement = document.createElement("li");
      optionElement.classList.add("option");
      optionElement.textContent = option;
      optionElement.addEventListener("click", () => {
        checkAnswer(index);
      });
      optionsElement.appendChild(optionElement);
    });
  }
  
  // Check the selected answer
  function checkAnswer(selectedIndex) {
    const currentQuestion = triviaData[currentQuestionIndex];
  
    if (selectedIndex === currentQuestion.correctAnswer) {
      resultElement.textContent = "Correct!";
      score++;
    } else {
      resultElement.textContent = "Wrong!";
      score = 0;
    }
  
    scoreElement.textContent = `Score: ${score}`;
  
    currentQuestionIndex++;
    if (currentQuestionIndex < triviaData.length) {
      setTimeout(showQuestion, 1000);
    } else {
      setTimeout(() => {
        questionContainer.style.display = "none";
        restartButton.style.display = "block";
      }, 1000);
    }
  }
  
  // Restart the game
  function restartGame() {
    questionContainer.style.display = "block";
    restartButton.style.display = "none";
    initGame();
  }
  
  // Event listener for restart button click
  restartButton.addEventListener("click", restartGame);
  
  // Start the game
  initGame();
  