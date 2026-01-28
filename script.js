const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

const button = document.getElementById("toggleBtn");
const text = document.getElementById("statusText");
const card = document.getElementById("card");

let isOpen = false;

button.addEventListener("click", function () {
    if (!isOpen) {
        text.innerText = "Welcome to my Frontend Journey 🚀";
        button.innerText = "Hide Journey";
        card.classList.add("active");
        isOpen = true;
    } else {
        text.innerText = "I am learning frontend development.";
        button.innerText = "Explore My Journey";
        card.classList.remove("active");
        isOpen = false;
    }
});
let progress = 0;

button.addEventListener("click", function () {
    if (progress < 100) {
        progress += 20;
        progressFill.style.width = progress + "%";
        progressText.innerText = "Progress: " + progress + "%";
    }

    if (progress >= 100) {
        progressText.innerText = "Journey Complete 🎉";
        button.innerText = "Journey Completed 🚀";
        button.disabled = true;

        resetBtn.style.display = "inline-block";
    }
});

// RESET LOGIC
resetBtn.addEventListener("click", function () {
    progress = 0;
    progressFill.style.width = "0%";
    progressText.innerText = "Progress: 0%";

    button.innerText = "Explore My Journey";
    button.disabled = false;

    resetBtn.style.display = "none";
});


