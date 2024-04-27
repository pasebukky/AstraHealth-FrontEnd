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
                    input.classList.add('hidden');
                    info.textContent = input.value || "nil";
                    info.classList.remove('hidden');
                } else {

                    info.classList.add('hidden');
                    input.value = info.textContent !== "nil" ? info.textContent : ""; 
                    input.classList.remove('hidden');
                }
            }
        });

        if (editProfileButton.textContent === "Edit Profile") {
            editProfileButton.textContent = "Save Changes";
            profileInfoItems.forEach(function(item) {
                const input = item.querySelector('input');
                if (input) {
                    input.placeholder = input.getAttribute('placeholder');
                }
            });
        } else {
            if (validateProfile()) {
                editProfileButton.textContent = "Edit Profile";
            }
        }

        if (medicalHistoryInput.value.trim() === "") {
            medicalHistoryInput.value = "No significant medical history";
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
            inputElement.style.borderColor = "";
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
});
