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


document.addEventListener('DOMContentLoaded', function() {
    const role = sessionStorage.getItem("role");
  
    // Add event listener to "My Profile" link
    const profileTab = document.getElementById("profile-tab");
    if (profileTab) {
        profileTab.addEventListener("click", function(event) {
            event.preventDefault();
            if (role === "doctor") {
                window.location.href = "/doctors_profile.html";
            } else if (role === "patient") {
                window.location.href = "/patients_profile.html";
            }
            console.log(role + " is clicked");
        });
    }

    // Add event listener to "Appointments" link
    const appointmentsTab = document.getElementById("appointments-tab");
    if (appointmentsTab) {
        appointmentsTab.addEventListener("click", function(event) {
            event.preventDefault();
            if (role === "doctor") {
                window.location.href = "/doctors_appointments.html";
            } else if (role === "patient") {
                window.location.href = "/patients_appointments.html";
            }
            console.log(role + " is clicked");
        });
    }

    // Add event listener to "Mobile My Profile" link
    const mobileProfileTab = document.getElementById("mobile-profile-tab");
    if (mobileProfileTab) {
        mobileProfileTab.addEventListener("click", function(event) {
            event.preventDefault();
            if (role === "doctor") {
                window.location.href = "/doctors_profile.html";
            } else if (role === "patient") {
                window.location.href = "/patients_profile.html";
            }
            console.log(role + " is clicked");
        });
    }

    // Add event listener to "Mobile Appointments" tab if it exists
    const mobileAppointmentsTab = document.getElementById("mobile-appointments-tab");
    if (mobileAppointmentsTab) {
        mobileAppointmentsTab.addEventListener("click", function(event) {
            event.preventDefault();
            if (role === "doctor") {
                window.location.href = "/doctors_appointments.html";
            } else if (role === "patient") {
                window.location.href = "/patients_appointments.html";
            }
            console.log(role + " is clicked");
        });
    }
  })
  