//Profile validation and updating
document.addEventListener("DOMContentLoaded", function() {
    const editProfileButton = document.querySelector(".edit-profile-button"); 
    const profileInfoItems = document.querySelectorAll(".profile-info .info-item");
    const medicalHistoryInput = document.getElementById('medicalHistoryInput');
    const charCount = document.getElementById('charCount');
    const profileImage = document.querySelector(".profile-image");
    const uploadImageButton = document.getElementById('upload-icon');
    const profileImageInput = document.getElementById('profileImageInput');
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
            profileImage.style.opacity = "0.5";
            uploadImageButton.style.display = 'block';
            profileInfoItems.forEach(function(item) {
                const input = item.querySelector('input, textarea'); 
                if (input) {
                    input.placeholder = input.getAttribute('placeholder');
                }
            });
        } else {
            if (validateProfile()) {
                editProfileButton.textContent = "Update Profile";
                profileImage.style.opacity = "1";
                uploadImageButton.style.display = 'none';
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
        const regex = /^(19\d{2}|20[01]\d)-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/; 
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
        const regex = /^(male|female)$/i; 
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
      
    profileImageInput.addEventListener( 'change' , function() {
        const newImage = this.files[0];
        if (newImage) {
            const reader = new FileReader();

            reader.addEventListener( 'load' , function(){
                profileImage.setAttribute('src', reader.result);
            });
        reader.readAsDataURL (newImage);
        }
    });    
});


// Function to capitalize first characters of words
function capitalizeName(name) {
    return name.trim().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}


//Retrieve patients profile from the database
document.addEventListener('DOMContentLoaded', function() {
    const getPatientProfile = `https://api.astrafort.tech/v1/patient/profile`;
  
    fetch(getPatientProfile, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include' 
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        const profileImageElement = document.querySelector('.profile-image');
        if (data.image) {
            profileImageElement.src = data.image; 
        } else {
            profileImageElement.src = 'Images_Assets/Images/blank-profile-photo.png'; 
        }
        document.querySelector('.profile-full-name').textContent = `${capitalizeName(data.first_name)} ${capitalizeName(data.last_name)}`;
        document.querySelector('.email').textContent = data.email;
        document.querySelector('.phone_number').textContent = data.phone;
        document.getElementById('dobInfo').textContent = data.dob || 'nil';
        document.getElementById('genderInfo').textContent = data.gender || 'nil';
        document.getElementById('heightInfo').textContent = data.height || 'nil';
        document.getElementById('weightInfo').textContent = data.weight || 'nil';
        document.getElementById('emergencyNameInfo').textContent = data.SOS_fullname || 'nil';
        document.getElementById('emergencyPhoneInfo').textContent = data.SOS_phone || 'nil';
        document.getElementById('medicalHistoryInfo').textContent = data.medical_history || 'No medical history information available';
      })
      .catch(error => {
        console.error('Fetch Error:', error);
      });
  });

//Update patients profile and save in database
document.addEventListener("DOMContentLoaded", function() {
    const editProfileButton = document.querySelector(".edit-profile-button");
    const inputs = {
        dob: document.getElementById('dobInput'),
        gender: document.getElementById('genderInput'),
        height: document.getElementById('heightInput'),
        weight: document.getElementById('weightInput'),
        medicalHistory: document.getElementById('medicalHistoryInput'),
        SOSFullname: document.getElementById('emergencyNameInput'),
        SOSPhone: document.getElementById('emergencyPhoneInput'),
        profileImage: document.getElementById('profileImageInput')
    };

    const initialValues = {};
    Object.keys(inputs).forEach(key => {
        if (inputs[key].type !== 'file') {
            initialValues[key] = inputs[key].value;
        }
    });

    editProfileButton.addEventListener("click", function() {
        console.log("Button text on click:", editProfileButton.textContent);

        if (editProfileButton.textContent === "Update Profile") {
            let payload = {};


            if (inputs.profileImage.files.length > 0) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    payload['image'] = e.target.result;
                    collectAndSendUpdates(payload); 
                };
                reader.readAsDataURL(inputs.profileImage.files[0]);
            } else {
                collectAndSendUpdates(payload);
            }
        }
    });

    function collectAndSendUpdates(payload) {
        Object.keys(inputs).forEach(key => {
            if (key !== 'profileImage' && inputs[key].type !== 'file') { 
                if (inputs[key].value !== initialValues[key]) {
                    payload[key] = inputs[key].value;
                }
            }
        });

        if (Object.keys(payload).length > 0) {
            sendUpdateRequest(payload);
        } else {
            showNotificationModal("No changes detected.");
        }
    }

    function sendUpdateRequest(payload) {
        console.log("Payload being sent:", payload);

        fetch('https://api.astrafort.tech/v1/patient/update_profile', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
            credentials: 'include'
        })
        .then(response => response.json().then(data => {
            if (!response.ok) {
                if (data.detail && data.detail.length > 0) {
                    const firstError = data.detail[0];
                    const fieldName = firstError.loc[firstError.loc.length - 1];
                    const errorMessage = firstError.msg;
                    throw new Error(`${capitalizeName(fieldName)} ${errorMessage}`);
                } else {
                    throw new Error('Failed to update profile: Unknown error');
                }
            }
            return data;
        }))
        .then(data => {
            showNotificationModal("Profile updated successfully!");
            console.log('Profile updated successfully:', data);
        })
        .catch(error => {
            showNotificationModal("Failed to update profile: " + error.message);
            console.error('Failed to update profile:', error);
        });
    }
});
