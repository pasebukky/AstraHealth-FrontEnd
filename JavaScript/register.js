const Form = document.getElementById("signup-form");
const mobileForm = document.getElementById("mobile-signup-form");

function selectRole(role) {
  const roleButtons = document.querySelectorAll('.role-button[data-role]');
  roleButtons.forEach(button => {
    button.classList.remove('selected');
    if (button.getAttribute('data-role') === role) {
      button.classList.add('selected');
    }
  });
}

const getSelectedRole = (FormId) => {
  const roleButtons = document.querySelectorAll(`#${FormId} button[data-role]`);
  let role;
  roleButtons.forEach((button) => {
    if (button.classList.contains("selected")) {
      console.log("Selected role:", role);
      role = button.getAttribute("data-role");
    }
  });
  console.log("Selected role:", role);
  return role;
};

const registerUser = (formData, role) => {
  const patientUrl = `https://api.astrafort.tech/v1/patient/register`;
  const doctorUrl = `https://api.astrafort.tech/v1/doctor/register`;
  const url = role === "patient" ? patientUrl : doctorUrl;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then(async (response) => {
      if (response.ok) {
        console.log("User registered successfully");
      } else {
        // Try to parse JSON response
        try {
          const errorData = await response.json();
          // Check if there's a detail array with error messages
          if (errorData.detail) {
            const firstError = errorData.detail[0];
            console.error("Registration failed:", firstError.msg);
          } else {
            console.error("Registration failed with unknown error");
          }
        } catch (error) {
          console.error("Failed to parse error response:", error);
        }
      }
    })
    .catch((error) => {
      console.error("Error registering user:", error);
    });
};


mobileForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting
  console.log("Mobile form submitted");
  // Get the selected role
  const role = getSelectedRole("mobile-signup-form");
  console.log("Role from mobile form:", role);


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
  console.log("Im in first");
  event.preventDefault(); // Prevent the form from submitting
  console.log("Desktop form submitted");

  console.log("Im in");

  // Get the selected role
  const role = getSelectedRole("signup-form");
  console.log("Role from desktop form:", role);


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
    // gender: "Male",
    // dob: "",
    phone: phone,
    // address: "",
  };

  registerUser(formData, role); // You can use this object as needed, e.g., send it to a server

  // Reset the form fields
  document.getElementById("signup-form").reset();
});
