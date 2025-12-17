const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    message.style.color = "green";
    message.textContent = "Logging in...";

    // Simulate loading animation
    setTimeout(() => {
        message.textContent = "Login Successful!";
    }, 1200);
});
