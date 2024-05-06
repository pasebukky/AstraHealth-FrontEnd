function checkAuthentication() {
  const isAuthenticated = sessionStorage.getItem("authenticated") === "true";
  return isAuthenticated;
}

  document.addEventListener("DOMContentLoaded", function () {
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
  });
