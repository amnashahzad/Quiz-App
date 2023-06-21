// Define quiz questions and answers
const quizData = [
    {
        question: "Which programming language is used for web development?",
        options: ["Java", "Python", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlink Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which programming language is known as the 'mother of all languages'?",
        options: ["C", "Java", "Python", "Assembly"],
        answer: "C"
    }
];

const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const submitButton = document.getElementById('submit-btn');

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    deselectOptions();
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsContainer.innerHTML = '';

    currentQuizData.options.forEach((option) => {
        const label = document.createElement('label');
        label.innerText = option;
        const radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.name = 'option';
        radioButton.value = option;
        optionsContainer.appendChild(label);
        label.appendChild(radioButton);
    });
}

function deselectOptions() {
    const options = document.getElementsByName('option');
    options.forEach((option) => {
        option.checked = false;
    });
}

function getSelectedOption() {
    const options = document.getElementsByName('option');
    let selectedOption = undefined;
    options.forEach((option) => {
        if (option.checked) {
            selectedOption = option.value;
        }
    });
    return selectedOption;
}

function showResult() {
    quizContainer.innerHTML = `<h2>You scored ${score} out of ${quizData.length} questions correctly.</h2>`;
}

function checkAnswer() {
    const selectedOption = getSelectedOption();
    if (selectedOption === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        showResult();
    }
}

loadQuiz();

submitButton.addEventListener('click', checkAnswer);
