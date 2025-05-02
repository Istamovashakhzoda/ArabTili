const acc = document.querySelectorAll(".accordion");
acc.forEach((button) => {
  button.addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

const questions = [
  {
    question: "Qaysi fe’l **mudori‘** zamonidadir?",
    answers: [
      { text: "كَتَبَ", correct: false },
      { text: "يَكْتُبُ", correct: true },
      { text: "اُكْتُبْ", correct: false },
    ],
  },
  {
    question: "Qaysi fe’l **amr (buyruq)** zamonidadir?",
    answers: [
      { text: "يَذْهَبُ", correct: false },
      { text: "ذَهَبَ", correct: false },
      { text: "اِذْهَبْ", correct: true },
    ],
  },
  {
    question: "Qaysi fe’l **madī (o‘tgan zamon)** zamonidadir?",
    answers: [
      { text: "نَفْهَمُ", correct: false },
      { text: "فَهِمَ", correct: true },
      { text: "اِفْهَمْ", correct: false },
    ],
  },
  {
    question: "Qaysi fe’l **kelajak zamon**ni bildiradi?",
    answers: [
      { text: "سَيَذْهَبُ", correct: true },
      { text: "ذَهَبَ", correct: false },
      { text: "اِذْهَبْ", correct: false },
    ],
  },
  {
    question: "Qaysi fe’l **mudori‘ emas**?",
    answers: [
      { text: "يَفْتَحُ", correct: false },
      { text: "اِفْتَحْ", correct: true },
      { text: "يَكْتُبُ", correct: false },
    ],
  },
  {
    question: "Qaysi fe’l **madī emas**?",
    answers: [
      { text: "قَرَأَ", correct: false },
      { text: "يَقْرَأُ", correct: true },
      { text: "كَتَبَ", correct: false },
    ],
  },
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const container = document.getElementById("question-container");
  const q = questions[currentQuestion];
  let html = `<p><strong>${q.question}</strong></p>`;
  q.answers.forEach((answer, index) => {
    html += `<button onclick="checkAnswer(${index})">${answer.text}</button><br>`;
  });
  container.innerHTML = html;
  document.getElementById("feedback").innerText = "";
}

function checkAnswer(index) {
  const correct = questions[currentQuestion].answers[index].correct;
  const feedback = document.getElementById("feedback");
  if (correct) {
    feedback.innerText = "✅ To‘g‘ri!";
    feedback.style.color = "green";
    score++;
  } else {
    feedback.innerText = "❌ Noto‘g‘ri.";
    feedback.style.color = "red";
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz").style.display = "none";
    const percent = Math.round((score / questions.length) * 100);
    const msg =
      percent >= 80
        ? "A’lo ishladingiz! 👏"
        : percent >= 50
        ? "Yaxshi, yana mashq qiling. 👍"
        : "Yana urinish kerak. 💪";
    document.getElementById(
      "final-score"
    ).innerText = `📊 Natija: ${score}/${questions.length} (${percent}%) – ${msg}`;
  }
}

showQuestion();
