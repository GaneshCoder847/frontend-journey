const btn = document.getElementById("exploreBtn");
const message = document.getElementById("message");

btn.addEventListener("click", function () {
  message.style.display = "block";
  message.style.color = "#00bcd4";
  message.style.fontWeight = "bold";
});
