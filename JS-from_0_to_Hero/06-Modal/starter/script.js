'use strict'; // ENABLE STRICT MODE

// Selections
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
// Selection for btn group
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

// Removes the "hidden" attribute from the ".hidden" Css class
const openModal = function () {
    modal.classList.remove("hidden");       // class names without "." since it's not a selection, we already selected it via the const.
    overlay.classList.remove("hidden");
}

// Adds the "hidden" attribute back again to the ".hidden" Css class
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// "Keydown" Event Listener
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});