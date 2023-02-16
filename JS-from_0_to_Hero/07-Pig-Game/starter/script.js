'use strict';

// Selecting elements queries
const score0El = document.querySelector("#score--0");               // QuerySelector syntax for id-elements
const score1El = document.getElementById("score--1");              // for id-elements there also a faster getById syntax
const diceEl = document.querySelector(".dice");                     // Selecting the dice element
const btnNew = document.querySelector(".btn--new");                 // New button selection
const btnRoll = document.querySelector(".btn--roll");               // Roll button selection
const btnHold = document.querySelector(".btn--hold");               // Hold button selection
const current0El = document.getElementById("current--0");          // Current score - current--0 element selector
const current1El = document.getElementById("current--1");          // Current score - current--1 element selector

// Setting a clean slate for the Game
let finalScore_0,
    finalScore_1,
    currentScore_0,
    currentScore_1 = 0;

function reset() {
    score0El.textContent = "0";
    score1El.textContent = "0";
    diceEl.classList.add("hidden");
    finalScore_0 = 0;
    finalScore_1 = 0;
    currentScore_0 = 0;
    currentScore_1 = 0;
    document.querySelector(".player").classList.remove("player--winner");
    document.querySelector(".player").classList.remove("player--active");
    document.querySelector(".player--0").classList.add("player--active");
}

reset();

// Creating a dice roll (1 - 6)
function diceRoll() {
    return Math.trunc(Math.random() * 6) + 1;
}

// Rolling dice implementation
btnRoll.addEventListener("click", function () {
    if (finalScore_0 < 100 && finalScore_1 < 100) {
        let currentRoll = diceRoll();
        diceEl.classList.remove("hidden");
        diceEl.src = `dice-${currentRoll}.png`;
        if (currentRoll !== 1 && document.querySelector(".player--0").classList.contains("player--active")) {
            currentScore_0 += currentRoll;
            current0El.textContent = currentScore_0;
        } else if (currentRoll !== 1 && document.querySelector(".player--1").classList.contains("player--active")) {
            currentScore_1 += currentRoll;
            current1El.textContent = currentScore_1;
        } else {
            if (document.querySelector(".player--0").classList.contains("player--active")) {
                document.querySelector(".player--0").classList.remove("player--active");
                document.querySelector(".player--1").classList.add("player--active");
                currentScore_0 = 0;
                current0El.textContent = currentScore_0;
            } else {
                document.querySelector(".player--1").classList.remove("player--active");
                document.querySelector(".player--0").classList.add("player--active");
                currentScore_1 = 0;
                current1El.textContent = currentScore_1;
            }
        }
    }
});

// Holding implementation
btnHold.addEventListener("click", function () {
    if (finalScore_0 < 100 && finalScore_1 < 100) {
        if (document.querySelector(".player--0").classList.contains("player--active")) {
            finalScore_0 += currentScore_0;
            score0El.textContent = finalScore_0;
            document.querySelector(".player--0").classList.remove("player--active");
            document.querySelector(".player--1").classList.add("player--active");
            currentScore_0 = 0;
            current0El.textContent = currentScore_0;
            if (finalScore_0 >= 100) {
                document.querySelector(".player--0").classList.add("player--winner");
            }
        } else {
            finalScore_1 += currentScore_1;
            score1El.textContent = finalScore_1;
            document.querySelector(".player--1").classList.remove("player--active");
            document.querySelector(".player--0").classList.add("player--active");
            currentScore_1 = 0;
            current1El.textContent = currentScore_1;
            if (finalScore_1 >= 100) {
                document.querySelector(".player--1").classList.add("player--winner");
            }
        }
    }
});

// New Game implementation
btnNew.addEventListener("click", reset);