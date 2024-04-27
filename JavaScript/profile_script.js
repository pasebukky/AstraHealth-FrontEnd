// document.addEventListener("DOMContentLoaded", function() {
//     const editProfileButton = document.querySelector(".edit-profile-button");
//     const profileInfoItems = document.querySelectorAll(".profile-info .info-item");
//     const medicalHistoryInput = document.getElementById('medicalHistoryInput');

//     editProfileButton.addEventListener("click", function() {
//         // Toggle contentEditable attribute of profile info items
//         profileInfoItems.forEach(function(item) {
//             const input = item.querySelector('input');
//             const info = item.querySelector('p');
//             if (input && info) {
//                 if (!input.classList.contains('hidden')) {
//                     // If input is visible, hide it and show the info
//                     input.classList.add('hidden');
//                     info.textContent = input.value || "nil"; // Set to "nil" if input is empty
//                     info.classList.remove('hidden');
//                 } else {
//                     // If input is hidden, show it and hide the info
//                     info.classList.add('hidden');
//                     input.value = info.textContent !== "nil" ? info.textContent : ""; // Clear input if info is "nil"
//                     input.classList.remove('hidden');
//                 }
//             }
//         });

//         // Change the text of the edit button based on its state
//         if (editProfileButton.textContent === "Edit Profile") {
//             editProfileButton.textContent = "Save Changes";
//             // Show placeholders for input fields
//             profileInfoItems.forEach(function(item) {
//                 const input = item.querySelector('input');
//                 if (input) {
//                     input.placeholder = input.getAttribute('placeholder');
//                 }
//             });
//         } else {
//             if (validateProfile()) {
//                 editProfileButton.textContent = "Edit Profile";
//                 // You can also send the updated profile information to the server here
//             } else {
//                 // If validation fails, keep the edit button text as "Save Changes"
//                 // You may also display an error message to the user
//             }
//         }

//         // Fill medical history input with default value if empty before saving
//         if (medicalHistoryInput.value.trim() === "") {
//             medicalHistoryInput.value = "No significant medical history";
//         }
//     });

//     function validateProfile() {
//         // Validation logic here...
//         return true; // For demonstration purposes
//     }
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const editProfileButton = document.querySelector(".edit-profile-button");
//     const profileInfoItems = document.querySelectorAll(".profile-info .info-item input");

//     editProfileButton.addEventListener("click", function() {
//         profileInfoItems.forEach(function(input) {
//             if (!input.classList.contains('hidden')) {
//                 // If input is visible, hide it and show the placeholder
//                 input.classList.add('hidden');
//                 input.placeholder = input.getAttribute('placeholder');
//             } else {
//                 // If input is hidden, show it and hide the placeholder
//                 input.classList.remove('hidden');
//                 input.placeholder = '';
//             }
//         });

//         // Change the text of the edit button based on its state
//         if (editProfileButton.textContent === "Edit Profile") {
//             editProfileButton.textContent = "Save Changes";
//         } else {
//             // Handle saving changes
//             editProfileButton.textContent = "Edit Profile";
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const editProfileButton = document.querySelector(".edit-profile-button");
//     const profileInfoItems = document.querySelectorAll(".profile-info .info-item input");

//     editProfileButton.addEventListener("click", function() {
//         profileInfoItems.forEach(function(input) {
//             // Toggle the "hidden" class for each input element
//             input.classList.toggle('hidden');
//             // If the input is visible, clear its value and show the placeholder
//             if (!input.classList.contains('hidden')) {
//                 input.value = ""; // Clear the input value
//                 input.placeholder = input.getAttribute('placeholder');
//             }
//         });

//         // Change the text of the edit button based on its state
//         if (editProfileButton.textContent === "Edit Profile") {
//             editProfileButton.textContent = "Save Changes";
//         } else {
//             // Handle saving changes
//             editProfileButton.textContent = "Edit Profile";
//         }
//     });
// });


// document.addEventListener("DOMContentLoaded", function() {
//     const dobInput = document.getElementById('dobInput');
//     const heightInput = document.getElementById('heightInput');
//     const weightInput = document.getElementById('weightInput');
//     const emergencyNameInput = document.getElementById('emergencyNameInput');
//     const emergencyPhoneInput = document.getElementById('emergencyPhoneInput');
//     const medicalHistoryInput = document.getElementById('medicalHistoryInput');

//     const editProfileButton = document.querySelector(".edit-profile-button");

//     // Event listeners to check input validity and update border color
//     dobInput.addEventListener("input", function() {
//         validateAndSetBorderColor(dobInput, validateDOB);
//     });

//     heightInput.addEventListener("input", function() {
//         validateAndSetBorderColor(heightInput, validateHeight);
//     });

//     weightInput.addEventListener("input", function() {
//         validateAndSetBorderColor(weightInput, validateWeight);
//     });

//     emergencyNameInput.addEventListener("input", function() {
//         validateAndSetBorderColor(emergencyNameInput, validateEmergencyName);
//     });

//     emergencyPhoneInput.addEventListener("input", function() {
//         validateAndSetBorderColor(emergencyPhoneInput, validateEmergencyPhone);
//     });

//     medicalHistoryInput.addEventListener("input", function() {
//         validateAndSetBorderColor(medicalHistoryInput, validateMedicalHistory);
//     });

//     // Function to validate input and update border color
//     function validateAndSetBorderColor(inputElement, validationFunction) {
//         if (validationFunction(inputElement.value)) {
//             inputElement.style.borderColor = "green"; // Set border color to green if valid
//         } else {
//             inputElement.style.borderColor = ""; // Remove border color if invalid
//         }
//     }

//     // Validation functions
//     function validateDOB(dob) {
//         const regex = /^(0?[1-9]|[12][0-9]|3[01])-(0?[1-9]|1[0-2])-(19\d{2}|20[01]\d)$/; // DD-MM-YYYY
//         return regex.test(dob);
//     }

//     function validateHeight(height) {
//         const regex = /^(30(\.\d+)?|[3-9]\d(\.\d+)?|1\d\d(\.\d+)?|2[0-4]\d(\.\d+)?|250(\.0)?)$/;// 30 to 250
//         return regex.test(height);
//     }

//     function validateWeight(weight) {
//         const regex = /^(?:[5-9]\d{0,2}|[1-4]\d{2}|500)(?:\.\d{1,2})?$/; // 5 to 500 with optional decimal part
//         return regex.test(weight);
//     }


//     function validateEmergencyName(name) {
//         const regex = /^[A-Za-z]{3,}(?:-[A-Za-z]{3,})* [A-Za-z]{3,}(?:-[A-Za-z]{3,})*$/; // Each part should have at least 3 letters
//         return regex.test(name);
//     }
    

//     function validateEmergencyPhone(phone) {
//         const regex = /^(080|081|070|071|090|091)\d{8}$/; // First 3 digits must match specified prefixes
//         return regex.test(phone);
//     }

//     function validateMedicalHistory(medicalHistory) {
//         const regex = /^.{3,}$/; // At least 4 characters
//         return regex.test(medicalHistory);
//     }
// });
// // 

document.addEventListener("DOMContentLoaded", function() {
    const editProfileButton = document.querySelector(".edit-profile-button");
    const profileInfoItems = document.querySelectorAll(".profile-info .info-item");
    const medicalHistoryInput = document.getElementById('medicalHistoryInput');
    const inputFields = {
        "dobInput": validateDOB,
        "heightInput": validateHeight,
        "weightInput": validateWeight,
        "emergencyNameInput": validateEmergencyName,
        "emergencyPhoneInput": validateEmergencyPhone,
        "medicalHistoryInput": validateMedicalHistory
    };

    editProfileButton.addEventListener("click", function() {
        // Toggle contentEditable attribute of profile info items
        profileInfoItems.forEach(function(item) {
            const input = item.querySelector('input');
            const info = item.querySelector('p');
            if (input && info) {
                if (!input.classList.contains('hidden')) {
                    // If input is visible, hide it and show the info
                    input.classList.add('hidden');
                    info.textContent = input.value || "nil"; // Set to "nil" if input is empty
                    info.classList.remove('hidden');
                } else {
                    // If input is hidden, show it and hide the info
                    info.classList.add('hidden');
                    input.value = info.textContent !== "nil" ? info.textContent : ""; // Clear input if info is "nil"
                    input.classList.remove('hidden');
                }
            }
        });

        // Change the text of the edit button based on its state
        if (editProfileButton.textContent === "Edit Profile") {
            editProfileButton.textContent = "Save Changes";
            // Show placeholders for input fields
            profileInfoItems.forEach(function(item) {
                const input = item.querySelector('input');
                if (input) {
                    input.placeholder = input.getAttribute('placeholder');
                }
            });
        } else {
            if (validateProfile()) {
                editProfileButton.textContent = "Edit Profile";
                // You can also send the updated profile information to the server here
            } else {
                // If validation fails, keep the edit button text as "Save Changes"
                // You may also display an error message to the user
            }
        }

        // Fill medical history input with default value if empty before saving
        if (medicalHistoryInput.value.trim() === "") {
            medicalHistoryInput.value = "No significant medical history";
        }
    });

    // Function to validate input based on input field name
    function validateInput(inputField, validationFunction) {
        const inputElement = document.getElementById(inputField);
        if (inputElement) {
            validateAndSetBorderColor(inputElement, validationFunction);
        }
    }

    // Event listeners to check input validity and update border color
    Object.keys(inputFields).forEach(function(inputField) {
        const inputElement = document.getElementById(inputField);
        if (inputElement) {
            inputElement.addEventListener("input", function() {
                validateInput(inputField, inputFields[inputField]);
            });
        }
    });

    // Function to validate input and update border color
    function validateAndSetBorderColor(inputElement, validationFunction) {
        if (validationFunction(inputElement.value)) {
            inputElement.style.borderColor = "green"; // Set border color to green if valid
        } else {
            inputElement.style.borderColor = ""; // Remove border color if invalid
        }
    }

    // Validation functions
    function validateDOB(dob) {
        const regex = /^(0?[1-9]|[12][0-9]|3[01])-(0?[1-9]|1[0-2])-(19\d{2}|20[01]\d)$/; // DD-MM-YYYY
        return regex.test(dob);
    }

    function validateHeight(height) {
        const regex = /^(30(\.\d+)?|[3-9]\d(\.\d+)?|1\d\d(\.\d+)?|2[0-4]\d(\.\d+)?|250(\.0)?)$/;// 30 to 250
        return regex.test(height);
    }

    function validateWeight(weight) {
        const regex = /^(?:[5-9]\d{0,2}|[1-4]\d{2}|500)(?:\.\d{1,2})?$/; // 5 to 500 with optional decimal part
        return regex.test(weight);
    }

    function validateEmergencyName(name) {
        const regex = /^[A-Za-z]{3,}(?:-[A-Za-z]{3,})* [A-Za-z]{3,}(?:-[A-Za-z]{3,})*$/; // Each part should have at least 3 letters
        return regex.test(name);
    }

    function validateEmergencyPhone(phone) {
        const regex = /^(080|081|070|071|090|091)\d{8}$/; // First 3 digits must match specified prefixes
        return regex.test(phone);
    }

    function validateMedicalHistory(medicalHistory) {
        const regex = /^.{3,}$/; // At least 4 characters
        return regex.test(medicalHistory);
    }

    function validateProfile() {
        // Validation logic here...
        return true; // For demonstration purposes
    }
});
