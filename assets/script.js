var timer = document.querySelector("#timer")
var cards = document.querySelector(".cards")
var startButton = document.querySelector("startbutton")
var startCard =document.querySelector("#start")
var questionCards = document.querySelector("#questions")
var q1 = document.querySelector("#q1")
var q2 = document.querySelector("#q2")
var q3 = document.querySelector("#q3")
var q4 = document.querySelector("#q4")
var q5 = document.querySelector("#q5")
var wrong = document.querySelector(".wrong")
var correct = document.querySelector(".true")
var timeLeft = 60
var scoreBoard
var score
var correct = true
var wrong = false
var questionArray = [q1, q2, q3, q4, q5]

function endGame(){}
function hideCards(){
    setAttribute(cards, hide)
}
function setTime() {
    var timerInterval = setInterval(function(){
        timeLeft--
    timer.textContent = timeLeft + "seconds left to complete the quiz"
    
    if (timeLeft === 1){
        timeLeft.textContent = timeLeft + "second left to complete the quiz"
    }
    if (timeLeft===0){
        clearInterval(timerInterval)
        endGame()
    }
    },1000)
}

function init(){
    hideCards()
}
init()
startButton.addEventListener("click", function(){
    startCard.style.display = "none"
})