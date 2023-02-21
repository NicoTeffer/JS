'use strict';

// Selecting elements
const player0El = document.querySelector(".player--0");             // Element selection of the player--0 element
const player1El = document.querySelector(".player--1");             // Element selection of the player--1 element
const score0El = document.querySelector("#score--0");               // Element selection via querySelector (mainly classes)
const score1El = document.getElementById("score--1");              // Element selection via getById (used for ID's)
const current0El = document.getElementById("current--0");          // Element selection of the current--0 element
const current1El = document.getElementById("current--1");          // Element selection of the current--1 element
const diceEl = document.querySelector(".dice");                     // Element selection of the dice element
const btnNew = document.querySelector(".btn--new");                 // Element selection of the Button "new" element
const btnRoll = document.querySelector(".btn--roll");               // Element selection of the Button "roll" element
const btnHold = document.querySelector(".btn--hold");               // Element selection of the Button "hold" element

// Global variables declaration
let scores,          // Score array of both players
    currentScore,
    activePlayer,
    playing;             // Sets the state of the game for winning conditions

// Function for game reset
function resetGame() {
    // Assignment of the globals
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = "0";
    score1El.textContent = "0";
    current0El.textContent = "0";
    current1El.textContent = "0";

    diceEl.classList.add("hidden");
    player0El.classList.remove(`player--winner`);
    player1El.classList.remove(`player--winner`);
    player0El.classList.add(`player--active`);
    player1El.classList.remove(`player--active`);
}

// Starting conditions
resetGame();

// Function for switching player
function switchPlayer() {
    // Switch to next player
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    // Toggle will add the class if it is not there, else it will remove it
    player0El.classList.toggle("player--active");               // Toggle removes active (since its active)
    player1El.classList.toggle("player--active");               // Toggle adding active (since it's not present)
}

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
    if (playing) {
        // 1. Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        // 2. Display dice
        diceEl.classList.remove("hidden");
        diceEl.src = `dice-${dice}.png`;
        // 3. Check for rolled 1: if true
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

// Holding functionality
btnHold.addEventListener("click", function () {
    if (playing) {
        // Add current score to the score of the active player
        // scores[1] = scores[1] + currentScore
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer].toString();
        // Check score already >= 100
        if (scores[activePlayer] >= 100) {
            // Finish game
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
            document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);
            diceEl.classList.toggle("hidden");
        } else {
            // Switch to the next player
            switchPlayer();
        }
    }
});

// New Game functionality
btnNew.addEventListener("click", resetGame);