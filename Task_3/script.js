const quizzes = {

html: [
{ q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Highlevel Text Machine Language"], answer: 0 },
{ q: "Who is making the Web standards?", options: ["Google", "Microsoft", "Mozilla", "W3C"], answer: 3 },
{ q: "Choose the correct HTML element for the largest heading:", options: ["<heading>", "<h6>", "<h1>", "<head>"], answer: 2 },
{ q: "What is the correct HTML element for inserting a line break?", options: ["<break>", "<br>", "<lb>", "<hr>"], answer: 1 },
{ q: "Which HTML attribute specifies an alternate text for an image?", options: ["alt", "title", "src", "longdesc"], answer: 0 }
],

javascript: [
{ q: "Which type of language is JavaScript?", options: ["Compiled", "Interpreted", "Assembly", "None"], answer: 1 },
{ q: "What keyword is used to declare a variable in JavaScript?", options: ["var", "int", "String", "dim"], answer: 0 },
{ q: "How do you write 'Hello World' in an alert box?", options: ["alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');", "msgBox('Hello World');"], answer: 2 },
{ q: "Which symbol is used for comments in JavaScript?", options: ["<!-- -->", "//", "#", "/* */"], answer: 1 },
{ q: "Which company developed JavaScript?", options: ["Mozilla", "Netscape", "Microsoft", "Sun Microsystems"], answer: 1 }
],

dsa: [
{ q: "Which data structure uses FIFO?", options: ["Stack", "Queue", "Tree", "Graph"], answer: 1 },
{ q: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], answer: 1 },
{ q: "Which data structure is used in recursion?", options: ["Queue", "Stack", "Array", "Linked List"], answer: 1 },
{ q: "Which sorting algorithm is fastest on average?", options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"], answer: 2 },
{ q: "Which is not a linear data structure?", options: ["Stack", "Queue", "Tree", "Array"], answer: 2 }
],

oop: [
{ q: "What is the core concept of OOP?", options: ["Encapsulation", "Iteration", "Recursion", "Selection"], answer: 0 },
{ q: "Which of the following is NOT an OOP principle?", options: ["Inheritance", "Polymorphism", "Encapsulation", "Compilation"], answer: 3 }
],

css: [
{ q: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], answer: 0 }
]

};

let currentQuiz = [];
let currentIndex = 0;
let score = 0;

function startQuiz(topic)
{
currentQuiz = quizzes[topic];
currentIndex = 0;
score = 0;

document.getElementById('quiz-box').classList.remove('hidden');
document.getElementById('result-box').classList.add('hidden');
document.querySelector('.quiz-selector').classList.add('hidden');

showQuestion();
}

function showQuestion()
{
const q = currentQuiz[currentIndex];

document.getElementById('question').textContent = q.q;

const optionsDiv = document.getElementById('options');
optionsDiv.innerHTML = '';

q.options.forEach((opt, i) =>
{
const btn = document.createElement('button');

btn.textContent = opt;

btn.onclick = () => selectOption(i, btn);

optionsDiv.appendChild(btn);
});

document.getElementById('next-btn').disabled = true;
}

function selectOption(index, btn)
{
const buttons = document.querySelectorAll('#options button');

buttons.forEach(b => b.classList.remove('selected'));

btn.classList.add('selected');

document.getElementById('next-btn').disabled = false;

if(index === currentQuiz[currentIndex].answer)
{
score++;
}

buttons.forEach(b => b.disabled = true);
}

function nextQuestion()
{
currentIndex++;

if(currentIndex < currentQuiz.length)
{
showQuestion();
}
else
{
document.getElementById('quiz-box').classList.add('hidden');

document.getElementById('result-box').classList.remove('hidden');

document.getElementById('score').textContent =
"You scored " + score + " out of " + currentQuiz.length;
}
}

function restartQuiz()
{
document.getElementById('result-box').classList.add('hidden');

document.querySelector('.quiz-selector').classList.remove('hidden');
}

/* API Feature */

function getJoke()
{
fetch("https://official-joke-api.appspot.com/random_joke")

.then(response => response.json())

.then(data =>
{
document.getElementById("joke").textContent =
data.setup + " - " + data.punchline;
})

.catch(error =>
{
document.getElementById("joke").textContent =
"Could not load joke. Please try again.";
});
}
