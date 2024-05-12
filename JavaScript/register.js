const Form = document.getElementById("signup-form");
const mobileForm = document.getElementById("mobile-signup-form");
const signInForm = document.getElementById("signin-form");
const mobileSignInForm = document.getElementById("mobile-signin-form");
const patientSignUpUrl = `https://api.astrafort.tech/v1/patient/register`;
const doctorSignUpUrl = `https://api.astrafort.tech/v1/doctor/register`;
const logInUrl = `https://api.astrafort.tech/v1/auth/token`;

const getSelectedRole = (FormId) => {
  const roleButtons = document.querySelectorAll(`#${FormId} button[data-role]`);
  let role;
  roleButtons.forEach((button) => {
    if (button.classList.contains("selected")) {
      role = button.getAttribute("data-role");
      // Remove the 'selected' class from all buttons
      roleButtons.forEach((btn) => btn.classList.remove("selected"));
      // Add the 'selected' class to the currently selected button
      button.classList.add("selected");
    }
  });
  console.log(role);
  return role;
};


const registerUser = (formData, role) => {
  if (!role) {
    console.error("Role not selected.");
    // Display error message to the user
    showNotificationModal("Please select a role.");
    return; // Exit function
  }

  const url = role === "patient" ? patientSignUpUrl : doctorSignUpUrl;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then(async (response) => {
      if (response.ok) {
        console.log("User registered successfully.\nProceed to sign in.");
        // Display success message to the user
        showNotificationModal("User registered successfully. Proceed to sign in.");
      } else {
        // Try to parse JSON response
        try {
          const errorData = await response.json();
          // Check if there's a detail array with error messages
          if (errorData.detail) {
            const firstError = errorData.detail[0];
            console.error("Registration failed:", firstError.msg);
            // Display error message to the user
            showNotificationModal("Registration failed: " + firstError.msg);
          } else {
            console.error("Registration failed with unknown error");
            // Display generic error message to the user
            showNotificationModal("Registration failed. Please try again later.");
          }
        } catch (error) {
          console.error("Failed to parse error response:", error);
          // Display generic error message to the user
          showNotificationModal("Registration failed. Please try again later.");
        }
      }
    })
    .catch((error) => {
      console.error("Error registering user:", error);
      // Display generic error message to the user
      showNotificationModal("Error registering user. Please try again later.");
    });
};


mobileForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting
  // Get the selected role
  const role = getSelectedRole("mobile-signup-form");

  // Get the form field values
  const firstName = document.querySelector(
    "#mobile-signup-form input[name='first_name']"
  ).value;
  const lastName = document.querySelector(
    "#mobile-signup-form input[name='last_name']"
  ).value;
  const email = document.querySelector(
    "#mobile-signup-form input[name='email']"
  ).value;
  const phone = document.querySelector(
    "#mobile-signup-form input[name='phone']"
  ).value;
  const password = document.querySelector(
    "#mobile-signup-form input[name='password']"
  ).value;
  const confirmPassword = document.querySelector(
    "#mobile-signup-form input[name='confirm_password']"
  ).value;

   // Create a JavaScript object with the form data
   const formData = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password1: password,
    password2: confirmPassword,
    phone: phone,
  };

  registerUser(formData, role);

  // Reset the form fields
  document.getElementById("mobile-signup-form").reset();
});

Form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the selected role
  const role = getSelectedRole("signup-form");

  // Get the form field values
  const firstName = document.querySelector(
    "#signup-form input[name='first_name']"
  ).value;
  const lastName = document.querySelector(
    "#signup-form input[name='last_name']"
  ).value;
  const email = document.querySelector(
    "#signup-form input[name='email']"
  ).value;
  const phone = document.querySelector(
    "#signup-form input[name='phone']"
  ).value;
  const password = document.querySelector(
    "#signup-form input[name='password']"
  ).value;
  const confirmPassword = document.querySelector(
    "#signup-form input[name='confirm_password']"
  ).value;

  // Create a JavaScript object with the form data
  const formData = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password1: password,
    password2: confirmPassword,
    phone: phone,
  };

  registerUser(formData, role); // You can use this object as needed, e.g., send it to a server

  // Reset the form fields
  document.getElementById("signup-form").reset();
});


const loginUser = (formData) => {
  let searchParams = new URLSearchParams(formData);
  fetch(logInUrl, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: searchParams.toString(),
  })
    .then(async (response) => {
      if (response.ok) {
        // Parse JSON response
        const data = await response.json();
        // Access role from the response
        sessionStorage.setItem("authenticated", "true");
        sessionStorage.setItem("role", data.role);
        showNotificationModal("You are successfully logged in");
        updateTabsVisibility();
        location.reload();
      } else {
        // Handle login errors
        try {
          const errorData = await response.json();
          // Display error message to user
          showNotificationModal("Login failed: " + errorData.detail);
        } catch (error) {
          // Display generic error message to user
          showNotificationModal("Login failed. Please try again later.");
        }
      }
    })
    .catch((error) => {
      console.error("Error logging in:", error);
      // Display generic error message to user
      showNotificationModal("Error logging in. Please try again later.");
    });
};




mobileSignInForm.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const email = document.querySelector(
    "#mobile-signin-form input[name='email']"
  ).value;
  const password = document.querySelector(
    "#mobile-signin-form input[name='password']"
  ).value;

  const formData = {
    username: email,
    password: password,
  };

  loginUser(formData);

  document.getElementById("mobile-signin-form").reset();
});

signInForm.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const email = document.querySelector(
    "#signin-form input[name='email']"
  ).value;
  const password = document.querySelector(
    "#signin-form input[name='password']"
  ).value;

  console.log(email, password);
  // Create a JavaScript object with the form data
  const formData = {
    username: email,
    password: password,
  };
  console.log(formData);
  loginUser(formData);

  // Reset the form fields
  document.getElementById("signin-form").reset();
});

