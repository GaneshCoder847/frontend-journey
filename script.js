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
