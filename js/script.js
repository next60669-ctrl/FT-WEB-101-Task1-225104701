// Dark Mode Button
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Change to Light Mode";
    } else {
        themeBtn.textContent = "Change to Dark Mode";
    }
});
// Contact Form
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for contacting me!");
});