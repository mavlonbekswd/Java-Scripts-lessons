let questions = [
  {
    question: "JavaScriptda o‘zgaruvchi qanday e’lon qilinadi?",
    options: ["var", "int", "string", "bool"],
    answer: 0  // 0-indeks, ya'ni "var"
  },
  {
    question: "HTMLda sarlavha uchun qaysi tag ishlatiladi?",
    options: ["<header>", "<title>", "<h1>", "<div>"],
    answer: 2  // "<h1>"
  },
  {
    question: "Qaysi biri massiv?",
    options: ["123", "'hello'", "[1,2,3]", "{a:1}"],
    answer: 2 // "[1,2,3]"
  }
]

const quizBox = document.getElementById("quiz-box")
const question = document.getElementById("question")
const options = document.getElementById("options")
const nextBtn = document.getElementById("nextBtn")
const feedback = document.getElementById("feedback")
const result = document.getElementById("result")

let currentQuestion = 0;

function showQuestion( ){
     // 1. Hozirgi savol obyektini arraydan olamiz
  let savolObj = questions[currentQuestion];
  
  // 2. Savol matnini chiqaramiz
  question.textContent = savolObj.question;
// 3. Variantlar (options) ni chiqaramiz
  options.innerHTML = ""; // Eski variantlarni tozalaymiz //! Sababi: har yangi savol chiqsa, eski variantlar ekranda qolmasligi uchun!
  savolObj.options.forEach(function(option, idx) {
    let btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "option-btn";
    btn.dataset.index = idx; // Keyinroq qaysi variant bosilganini bilamiz
    options.appendChild(btn);
  });
}
showQuestion();

