document.getElementById('signin-button').addEventListener('click', function() {
    let welcomePrompt = document.getElementById('welcome-back-prompt');
    let signinContainer = document.querySelector('.signin-section');
    let signupContainer = document.querySelector('.signup-section');
    let welcomeContainer = document.getElementById('welcome-prompt');
    let overlaySection = document.querySelector('.overlay-section');

    welcomePrompt.style.zIndex = "1";
    signinContainer.style.zIndex = "1";
    signupContainer.style.zIndex = "0";
    welcomeContainer.style.zIndex = "0";
    overlaySection.style.flexDirection = "row-reverse";
});

document.getElementById('signup-button').addEventListener('click', function() {
    let welcomePrompt = document.getElementById('welcome-back-prompt');
    let signinContainer = document.querySelector('.signin-section');
    let signupContainer = document.querySelector('.signup-section');
    let welcomeContainer = document.getElementById('welcome-prompt');
    let overlaySection = document.querySelector('.overlay-section');

    welcomePrompt.style.zIndex = "0";
    signinContainer.style.zIndex = "0";
    signupContainer.style.zIndex = "1";
    welcomeContainer.style.zIndex = "1";
    overlaySection.style.flexDirection = "row";
});
