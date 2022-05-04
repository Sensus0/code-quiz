const startButton = document.getElementById('start-btn')
const timer = document.querySelector('.timer')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const answerButton = document.getElementsByClassName('answer-button')
var startTime = 500
var timerId;
var indexPosition = 0
startButton.addEventListener('click', startGame)
console.log(answerButton)

var questions = [
    {
        question: "What is the second month in the year?",
        answers: {
            a: "January",
            b: "August",
            c: "February",
            d: "Pluto"
        },
        correctAnswer: "c"
    },
    {
        question: "How does a person tie their shoes?",
        answers: {
            a: "With their feet dipped in glue",
            b: "With two hands and no shoelace",
            c: "Febrwith two hands, double knoting the laces",
            d: ""
        },
        correctAnswer: "c"
    },
    {
        question: "When is Christmas",
        answers: {
            a: "December 25th",
            b: "August 10th",
            c: "February 45th",
            d: ""
        },
        correctAnswer: "a"
    },
]



function startGame() {
    console.log(timer)
    timer.classList.remove('hide')
    var secondSection = document.getElementById("seconds")
    secondSection.textContent = startTime
    timerId = setInterval(startTimer, 1000)
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide');

    showQuestion()




}

function endGame() {
    if (startTime <= 0)
        window.prompt("Your time is up! Type your name and save your score.")
}




var questionNumber = 0;
function showQuestion() {

    console.log(questionNumber)
    console.log()
    document.getElementById('question').textContent = questions[questionNumber].question
    document.getElementById('a').textContent = questions[questionNumber].answers.a
    document.getElementById('a').onclick = answerValidity;

    document.getElementById('b').textContent = questions[questionNumber].answers.b
    document.getElementById('b').onclick = answerValidity;

    document.getElementById('c').textContent = questions[questionNumber].answers.c
    document.getElementById('c').onclick = answerValidity;

    document.getElementById('d').textContent = questions[questionNumber].answers.d
    document.getElementById('d').onclick = answerValidity;

    // questionNumber++
    indexPosition++

}

var secondSection = document.getElementById("seconds")
function startTimer() {
    if (startTime <= 0) {
        clearInterval(timerId)
        window.location.reload();
    } else {
        startTime--
        secondSection.textContent = startTime
        endGame();
    }
}

function answerValidity() {
    console.log(this.id)
    console.log(questions[questionNumber].correctAnswer)
    if (this.id === questions[questionNumber].correctAnswer && indexPosition <= questions.length) {

        console.log('current index length is', questions.length)
        // questionNumber++;

        showQuestion()
        // indexPosition++

    } else if (indexPosition < questions.length) {
        console.log('ARRAY LENGTH', questions.length)
        console.log('CURRENT INDEX VALUE', indexPosition)
        startTime -= 10;
        secondSection.textContent = startTime
        questionNumber++;
        showQuestion()

        console.log('HOLLLLLLA', startTime)
    } else if (indexPosition === questions.length) {
        console.log('ENDING GAME NOW')
        endGame()
    }
}