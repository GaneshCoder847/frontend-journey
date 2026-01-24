const button = document.getElementById("journeyBtn");
const text = document.getElementById("journeyText");

button.addEventListener("click", function () {
    text.textContent = "I am consistently improving my frontend skills 🚀";
    button.textContent = "Journey Started ✔";
});
