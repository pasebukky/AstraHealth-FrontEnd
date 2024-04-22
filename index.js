document.getElementById('signin-button').addEventListener('click', function() {
    document.querySelector('.overlay-panel.overlay-right').style.zIndex = "1";
    document.querySelector('.signin-section').style.zIndex = "1";
    document.querySelector('.signup-section').style.zIndex = "0";
    document.querySelector('.overlay-panel.overlay-left').style.zIndex = "0";
    document.querySelector('.overlay-section').style.flexDirection = "row-reverse";
    document.querySelector('.dual-container').style.background = "linear-gradient(to right, #53AFB1 0%, #53AFB1 50%, #224750 50%, #224750 100%)";
});

document.getElementById('signup-button').addEventListener('click', function() {
    document.querySelector('.overlay-panel.overlay-right').style.zIndex = "0";
    document.querySelector('.signin-section').style.zIndex = "0";
    document.querySelector('.signup-section').style.zIndex = "1";
    document.querySelector('.overlay-panel.overlay-left').style.zIndex = "1";
    document.querySelector('.overlay-section').style.flexDirection = "row";
    document.querySelector('.dual-container').style.background = "linear-gradient(to left, #53AFB1 0%, #53AFB1 50%, #224750 50%, #224750 100%)";
});

document.addEventListener('DOMContentLoaded', function() {
    const roleButtons = document.querySelectorAll('.role-button');

    roleButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            roleButtons.forEach(btn => {
                if (btn !== this) {
                    btn.classList.remove('filled');
                }
            });
            this.classList.toggle('filled');
        });
    });
});
