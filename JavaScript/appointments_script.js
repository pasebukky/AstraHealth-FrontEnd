document.addEventListener("DOMContentLoaded", function() {
    let appButton = document.querySelector(".app-button");

    appButton.addEventListener("click", function() {
        window.location.href = "our_doctors.html";
    });
});