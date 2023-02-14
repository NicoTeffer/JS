'use strict';       // STRICT MODE ENABLED

// Random Number Generator (1 - 20)
function diceRoll() {
    return Math.trunc(Math.random() * 20) + 1;
}

let rightNumber = diceRoll();

let score = Number(document.querySelector(".score").textContent);
let highScore = 0;

function editMessage(message) {
    document.querySelector(".message").textContent = message;
}

function gameOver() {
    editMessage("🤷‍♂️🤯😒 U lost the game!");
}

function valueTooHigh() {
    editMessage("🤷‍♂️📈 Too high!");
}

function valueTooLow() {
    editMessage("🤷‍♂️📉 Too low!");
}

function setScore(value) {
    document.querySelector(".score").textContent = value;
}

function setHighscore(value) {
    document.querySelector(".highscore").textContent = value;
}

function setNumber(value) {
    document.querySelector(".number").textContent = value;
}

function lowerScore() {
    score--;
}

function setCssBg(value) {
    document.querySelector("body").style.backgroundColor = value;
}

function setCssWidth(value) {
    document.querySelector(".number").style.width = value;
}

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        editMessage("🙅 Please enter a number!");
    } else if (guess === rightNumber) {
        editMessage("🎉🥳🪅 Correct Number!");
        if (score > highScore) {
            highScore = score;
            setHighscore(highScore);
        }
        setNumber(guess);
        setCssBg("#60b347");
        setCssWidth("30rem");
    } else if (guess > rightNumber) {
        if (score > 1) {
            valueTooHigh();
            lowerScore();
            setScore(score);
        } else {
            gameOver();
            lowerScore();
            setScore(score);
        }
    } else if (guess < rightNumber) {
        if (score > 1) {
            valueTooLow();
            lowerScore();
            setScore(score);
        } else {
            gameOver();
            lowerScore();
            setScore(score);
        }
    }
});

function gameValueReset() {
    setHighscore(highScore);
    setScore("20");
    setNumber("?");
    editMessage("Start guessing...");
    document.querySelector(".guess").value = "";
    setCssBg("#222");
    setCssWidth("15rem");
    score = 20;
}

document.querySelector(".again").addEventListener("click", function () {
    rightNumber = diceRoll();
    gameValueReset();
});