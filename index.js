// // Function that allows transition from the welcome-back prompt to the sign-in form
// document.getElementById('mobile-signin-prompt-button').addEventListener('click', function() {
//     document.querySelector('.mobile-overlay-panel.mobile-overlay-top').style.zIndex = "1";
//     document.querySelector('.mobile-signin-section').style.zIndex = "1";
//     document.querySelector('.mobile-signup-section').style.zIndex = "0";
//     document.querySelector('.mobile-overlay-panel.mobile-overlay-bottom').style.zIndex = "0";
//     document.querySelector('.mobile-overlay-section').style.flexDirection = "row-reverse";
//     document.querySelector('.mobile-container').style.background = "linear-gradient(to top, #53AFB1 0%, #53AFB1 40%, #224750 40%, #224750 100%)";
// });

// // Function that allows transition from the welcome prompt to the sign-up form
// document.getElementById('mobile-signup-prompt-button').addEventListener('click', function() {
//     document.querySelector('.mobile-overlay-panel.mobile-overlay-top').style.zIndex = "0";
//     document.querySelector('.mobile-signin-section').style.zIndex = "0";
//     document.querySelector('.mobile-signup-section').style.zIndex = "1";
//     document.querySelector('.mobile-overlay-panel.mobile-overlay-bottom').style.zIndex = "1";
//     document.querySelector('.mobile-overlay-section').style.flexDirection = "row";
//     document.querySelector('.mobile-container').style.background = "linear-gradient(to bottom, #53AFB1 0%, #53AFB1 60%, #224750 60%, #224750 100%)";
// });

// // Function that handles transition from the welcome-back prompt to the sign-in form
// document.getElementById('mobile-signin-prompt-button').addEventListener('click', function() {
//     // Adjust the z-index to bring the sign-in section and top overlay to the front
//     document.querySelector('.mobile-overlay-panel.mobile-overlay-top').style.zIndex = "1";
//     document.querySelector('.mobile-signin-section').style.zIndex = "1";

//     // Hide the sign-up section and bottom overlay
//     document.querySelector('.mobile-signup-section').style.zIndex = "0";
//     document.querySelector('.mobile-overlay-panel.mobile-overlay-bottom').style.zIndex = "0";

//     // Adjust the layout to reverse the direction of the overlays
//     document.querySelector('.mobile-overlay-section').style.flexDirection = "row-reverse";

//     // Adjust the background gradient accordingly
//     document.querySelector('.mobile-container').style.background = "linear-gradient(to top, #53AFB1 0%, #53AFB1 40%, #224750 40%, #224750 100%)";
// });

// // Function that handles transition from the welcome prompt to the sign-up form
// document.getElementById('mobile-signup-prompt-button').addEventListener('click', function() {
//     // Adjust the z-index to bring the sign-up section and bottom overlay to the front
//     document.querySelector('.mobile-overlay-panel.mobile-overlay-top').style.zIndex = "0";
//     document.querySelector('.mobile-signin-section').style.zIndex = "0";

//     // Hide the sign-in section and top overlay
//     document.querySelector('.mobile-signup-section').style.zIndex = "1";
//     document.querySelector('.mobile-overlay-panel.mobile-overlay-bottom').style.zIndex = "1";

//     // Adjust the layout to the default direction of the overlays
//     document.querySelector('.mobile-overlay-section').style.flexDirection = "row";

//     // Adjust the background gradient accordingly
//     document.querySelector('.mobile-container').style.background = "linear-gradient(to bottom, #53AFB1 0%, #53AFB1 60%, #224750 60%, #224750 100%)";
// });



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

// Function that leads users to the sign-up / sign-in section of the landing page
document.addEventListener('DOMContentLoaded', function() {
    const getStartedButtons = document.querySelectorAll('.access-button');
    const dualContainer = document.querySelector('.dual-container');

    getStartedButtons.forEach(button => {
        button.addEventListener('click', function() {
            dualContainer.scrollIntoView({ behavior: 'smooth' });
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