const allSentences = [
  {
    sentence: "I love ___ cream on hot summer days.",
    context: ["I", "love", "cream", "on", "hot"],
    answer: "ice",
  },
  {
    sentence: "The cat sat on the ___ and purred.",
    context: ["sat", "on", "the", "and", "purred"],
    answer: "mat",
  },
  {
    sentence: "He opened the ___ and took out a book.",
    context: ["opened", "the", "and", "took", "out"],
    answer: "drawer",
  },
  {
    sentence: "The children played in the ___ after school.",
    context: ["children", "played", "in", "the", "after"],
    answer: "park",
  },
  {
    sentence: "She baked a ___ for his birthday.",
    context: ["baked", "a", "for", "his", "birthday"],
    answer: "cake",
  },
  {
    sentence: "The stars shine brightly in the ___.",
    context: ["stars", "shine", "brightly", "in", "the"],
    answer: "sky",
  },
  {
    sentence: "He wore a warm ___ on the cold day.",
    context: ["wore", "a", "warm", "on", "the"],
    answer: "jacket",
  },
  {
    sentence: "Please pass me the ___ to write.",
    context: ["please", "pass", "me", "the", "to"],
    answer: "pen",
  },
  {
    sentence: "They watched a movie at the ___ last night.",
    context: ["watched", "a", "movie", "at", "the"],
    answer: "cinema",
  },
  {
    sentence: "The bird flew high in the ___.",
    context: ["bird", "flew", "high", "in", "the"],
    answer: "sky",
  },
  {
    sentence: "She drank a cup of hot ___ in the morning.",
    context: ["drank", "a", "cup", "of", "hot"],
    answer: "coffee",
  },
  {
    sentence: "The baby is sleeping in the ___.",
    context: ["baby", "is", "sleeping", "in", "the"],
    answer: "crib",
  }
];

let selectedSentences = [];
let currentRound = 0;
let score = 0;

function shuffleAndPick(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function renderRound() {
  if (currentRound >= selectedSentences.length) {
    document.getElementById("gameEnd").textContent = `Game Over! Your final score is ${score}/10.`;
    document.getElementById("sentence").textContent = "";
    document.getElementById("context").textContent = "";
    document.getElementById("guess").style.display = "none";
    document.querySelector(".buttons").style.display = "none";
    document.getElementById("playAgainBtn").style.display = "inline-block";
    return;
  }

  const data = selectedSentences[currentRound];
  document.getElementById("sentence").innerText = data.sentence;
  document.getElementById("context").innerText = data.context.join(", ");
  document.getElementById("guess").value = "";
  document.getElementById("feedback").innerText = "";
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("gameEnd").textContent = "";
  document.getElementById("playAgainBtn").style.display = "none";
}

function submitGuess() {
  const guess = document.getElementById("guess").value.trim().toLowerCase();
  const answer = selectedSentences[currentRound].answer.toLowerCase();
  const feedback = document.getElementById("feedback");

  if (guess === answer) {
    feedback.innerHTML = "<strong>Correct!</strong>";
    score++;
    document.getElementById("score").textContent = score;
  } else {
    feedback.innerHTML = `Oops! The correct word was <strong>${selectedSentences[currentRound].answer}</strong>.`;
  }

  document.getElementById("nextBtn").style.display = "inline-block";
}

function nextRound() {
  currentRound++;
  renderRound();
}

function startGame() {
  selectedSentences = shuffleAndPick(allSentences, 10);
  currentRound = 0;
  score = 0;
  document.getElementById("score").textContent = score;
  document.getElementById("guess").style.display = "inline-block";
  document.querySelector(".buttons").style.display = "flex";
  document.getElementById("playAgainBtn").style.display = "none";
  renderRound();
}

startGame();
