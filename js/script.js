function togglePassword() {
    const passwordField = document.getElementById("password");
    const showIcon = document.querySelector(".show-icon");
    const hideIcon = document.querySelector(".hide-icon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        showIcon.style.display = "none";
        hideIcon.style.display = "inline";
    } else {
        passwordField.type = "password";
        showIcon.style.display = "inline";
        hideIcon.style.display = "none";
    }
}

// Set initial state of the icons
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".hide-icon").style.display = "none";
});

function goBack() {
    window.history.back();
  }

