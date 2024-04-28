document.addEventListener("DOMContentLoaded", function() {
    const editProfileButton = document.querySelector(".edit-profile-button"); 
    const profileInfoItems = document.querySelectorAll(".profile-info .info-item");
    const medicalHistoryInput = document.getElementById('medicalHistoryInput');
    const charCount = document.getElementById('charCount');
    const inputFields = {
        "dobInput": validateDOB,
        "heightInput": validateHeight,
        "weightInput": validateWeight,
        "genderInput": validateGender,
        "emergencyNameInput": validateEmergencyName,
        "emergencyPhoneInput": validateEmergencyPhone,
        "medicalHistoryInput": validateMedicalHistory
    };

    editProfileButton.addEventListener("click", function() { 
        profileInfoItems.forEach(function(item) {
            const input = item.querySelector('input, textarea'); 
            const info = item.querySelector('p');
            if (input && info) {
                if (!input.classList.contains('hidden')) {
                    const validationFunction = inputFields[input.id]; 

                    if (validationFunction && validationFunction(input.value)) {
                        input.classList.add('hidden');
                        info.textContent = input.value;
                        info.classList.remove('hidden');
                    } else {
                        info.textContent = "nil";
                        info.classList.remove('hidden');
                        input.classList.add('hidden');
                    }
                } else {
                    info.classList.add('hidden');
                    input.value = info.textContent !== "nil" ? info.textContent : ""; 
                    input.classList.remove('hidden');
                }
            }
        });

        if (editProfileButton.textContent === "Update Profile") {
            editProfileButton.textContent = "Save Changes";
            profileInfoItems.forEach(function(item) {
                const input = item.querySelector('input, textarea'); 
                if (input) {
                    input.placeholder = input.getAttribute('placeholder');
                }
            });
        } else {
            if (validateProfile()) {
                editProfileButton.textContent = "Update Profile";
            }
        }
    });

    function validateInput(inputField, validationFunction) {
        const inputElement = document.getElementById(inputField);
        if (inputElement) {
            validateAndSetBorderColor(inputElement, validationFunction);
        }
    }

    Object.keys(inputFields).forEach(function(inputField) {
        const inputElement = document.getElementById(inputField);
        if (inputElement) {
            inputElement.addEventListener("input", function() {
                validateInput(inputField, inputFields[inputField]);
            });
        }
    });
    
    function validateAndSetBorderColor(inputElement, validationFunction) {
        if (validationFunction(inputElement.value)) {
            inputElement.style.borderColor = "green";
        } else {
            inputElement.style.borderColor = "red";
        }
    }

    function validateDOB(dob) {
        const regex = /^(0?[1-9]|[12][0-9]|3[01])-(0?[1-9]|1[0-2])-(19\d{2}|20[01]\d)$/; 
        return regex.test(dob);
    }

    function validateHeight(height) {
        const regex = /^(30(\.\d+)?|[3-9]\d(\.\d+)?|1\d\d(\.\d+)?|2[0-4]\d(\.\d+)?|250(\.0)?)$/;
        return regex.test(height);
    }

    function validateWeight(weight) {
        const regex = /^(?:[5-9]\d{0,2}|[1-4]\d{2}|500)(?:\.\d{1,2})?$/; 
        return regex.test(weight);
    }

    function validateGender(gender) {
        const regex = /^(male|female|m|f)$/i; 
        return regex.test(gender);
    }

    function validateEmergencyName(name) {
        const regex = /^[A-Za-z]{3,}(?:-[A-Za-z]{3,})* [A-Za-z]{3,}(?:-[A-Za-z]{3,})*$/; 
        return regex.test(name);
    }

    function validateEmergencyPhone(phone) {
        const regex = /^(080|081|070|071|090|091)\d{8}$/;
        return regex.test(phone);
    }

    function validateMedicalHistory(medicalHistory) {
        const regex = /^.{3,}$/; 
        return regex.test(medicalHistory);
    }

    function validateProfile() {
        return true; 
    }

    medicalHistoryInput.addEventListener('input', function() {
        const remainingChars = 270 - medicalHistoryInput.value.length;
        charCount.textContent = 'Characters remaining: ' + remainingChars;
    });

    function toggleCharCountVisibility() {
        charCount.classList.toggle('hidden', editProfileButton.textContent !== "Save Changes");
    }

    editProfileButton.addEventListener('click', toggleCharCountVisibility);
    toggleCharCountVisibility();
    
});
