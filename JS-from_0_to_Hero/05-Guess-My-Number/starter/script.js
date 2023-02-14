'use strict';       // STRICT MODE ENABLED

// Random Number Generator (1 - 20)
let rightNumber = Math.trunc(Math.random() * 20) + 1;
console.log(rightNumber);

// Highscore implementation
let score = Number(document.querySelector(".score").textContent);
let highScore = 0;

// Start "guessing" implementation
// Calls via Event-listener the function attached to the listener
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        document.querySelector(".message").textContent = "🙅 Please enter a number!";
    } else if (guess === rightNumber) {
        document.querySelector(".message").textContent = "🎉🥳🪅 Correct Number!";
        if (highScore < score) {
            document.querySelector(".highscore").textContent = `${score}`;
            highScore = score;
        }
        document.querySelector(".number").textContent = `${guess}`;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
    } else if (guess > rightNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "🤷‍♂️📈 Too high!";
            score--;
            document.querySelector(".score").textContent = `${score}`;
        } else {
            document.querySelector(".message").textContent = "🤷‍♂️🤯😒 U lost the game!";
            score--;
            document.querySelector(".score").textContent = `${score}`;
        }
    } else if (guess < rightNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "🤷‍♂️📉 Too low!";
            score--;
            document.querySelector(".score").textContent = `${score}`;
        } else {
            document.querySelector(".message").textContent = "🤷‍♂️🤯😒 U lost the game!";
            score--;
            document.querySelector(".score").textContent = `${score}`;
        }
    }
});

// Play again button implementation
document.querySelector(".again").addEventListener("click", function () {
    rightNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(rightNumber);
    document.querySelector(".highscore").textContent = highScore;
    document.querySelector(".score").textContent = "20";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    score = 20;
});