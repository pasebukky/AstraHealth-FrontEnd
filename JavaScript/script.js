
// Function that allows transition from the welcome-back prompt to the sign-in form
document.getElementById('signin-prompt-button').addEventListener('click', function() {
    document.querySelector('.overlay-panel.overlay-right').style.zIndex = "1";
    document.querySelector('.signin-section').style.zIndex = "1";
    document.querySelector('.signup-section').style.zIndex = "0";
    document.querySelector('.overlay-panel.overlay-left').style.zIndex = "0";
    document.querySelector('.overlay-section').style.flexDirection = "row-reverse";
    document.querySelector('.dual-container').style.background = "linear-gradient(to right, #53AFB1 0%, #53AFB1 50%, #224750 50%, #224750 100%)";
});

// Function that allows transition from the welcome prompt to the sign-up form
document.getElementById('signup-prompt-button').addEventListener('click', function() {
    document.querySelector('.overlay-panel.overlay-right').style.zIndex = "0";
    document.querySelector('.signin-section').style.zIndex = "0";
    document.querySelector('.signup-section').style.zIndex = "1";
    document.querySelector('.overlay-panel.overlay-left').style.zIndex = "1";
    document.querySelector('.overlay-section').style.flexDirection = "row";
    document.querySelector('.dual-container').style.background = "linear-gradient(to left, #53AFB1 0%, #53AFB1 50%, #224750 50%, #224750 100%)";
});

// Function that allows users select their roles i.e patient or doctor
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

// Function that leads users to the sign-up / sign-in section of the desktop landing page
document.addEventListener('DOMContentLoaded', function() {
    const getStartedButtons = document.querySelectorAll('.access-button');
    const dualContainer = document.querySelector('.dual-container');

    getStartedButtons.forEach(button => {
        button.addEventListener('click', function() {
            dualContainer.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Function that leads users to the sign-up / sign-in section of the mobile landing page
document.addEventListener('DOMContentLoaded', function() {
    const getStartedButtons = document.querySelectorAll('.access-button');
    const mobileContainer = document.querySelector('.mobile-container');

    getStartedButtons.forEach(button => {
        button.addEventListener('click', function() {
            mobileContainer.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

//Function to show menu bar on mobile devices and tablets
 function showMenu() {
    const menubar = document.querySelector('.mobile-menu')
    menubar.style.display = 'flex'
 }

 //Function to hide menu bar on mobile devices and tablets
 function hideMenu() {
    const menubar = document.querySelector('.mobile-menu')
    menubar.style.display = 'none'
 }

