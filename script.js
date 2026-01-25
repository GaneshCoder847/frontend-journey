const journeyBtn = document.getElementById("journeyBtn");
const message = document.getElementById("message");

let isVisible = false;

journeyBtn.addEventListener("click", () => {
    if (!isVisible) {
        message.style.display = "block";
        isVisible = true;
    } else {
        message.style.display = "none";
        isVisible = false;
    }
});
