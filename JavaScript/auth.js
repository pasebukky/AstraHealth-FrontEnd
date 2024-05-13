const checkAuthentication = () => {
  const isAuthenticated = sessionStorage.getItem("authenticated") === "true";
  return isAuthenticated;
};

const updateTabsVisibility = () => {
  if (checkAuthentication()) {
    document.getElementById("appointments-tab").style.display = "block";
    document.getElementById("profile-tab").style.display = "block";
    document.getElementById("mobile-appointments-tab").style.display = "block";
    document.getElementById("mobile-profile-tab").style.display = "block";
  } else {
    document.getElementById("appointments-tab").style.display = "none";
    document.getElementById("profile-tab").style.display = "none";
    document.getElementById("mobile-appointments-tab").style.display = "none";
    document.getElementById("mobile-profile-tab").style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", updateTabsVisibility);

document.addEventListener("DOMContentLoaded", function() {
  const signUpButton = document.querySelector(".access-button.sign-up");

  // Update button text based on authentication status
  if (checkAuthentication()) {
      const signUpButton = document.querySelector(".access-button.sign-up");
      if (signUpButton !== null) {
          signUpButton.textContent = "SIGN OUT";
          document.querySelector(".access-button.sign-in").style.display = "none";
      }
  } else {
      const signUpButton = document.querySelector(".access-button.sign-up");
      if (signUpButton !== null) {
          signUpButton.textContent = "SIGN UP";
      }
  }

  // Add event listener to the "SIGN UP" button
  signUpButton.addEventListener("click", function() {
      if (checkAuthentication()) {
          sessionStorage.clear();
          signUpButton.textContent = "SIGN UP"; 
          updateTabsVisibility(); 
      } else {
      }
  });
});