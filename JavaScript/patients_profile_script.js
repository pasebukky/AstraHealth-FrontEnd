function validateProfile() {
    return true; 
}

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
        document.querySelector('.profile-image').src = data.image || 'Images_Assets/Images/blank-profile-photo.png'; 
        document.querySelector('.profile-full-name').textContent = `${data.first_name} ${data.last_name}`;
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


document.addEventListener('DOMContentLoaded', function() {
    function updateProfile(updatedData) {
        const updatePatientProfile = `https://api.astrafort.tech/v1/patient/update_profile`;

        fetch(updatePatientProfile, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', 
            body: JSON.stringify(updatedData)  
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Profile updated successfully:', data);
        })
        .catch(error => {
            console.error('Update Error:', error);
        });
    }

    const editProfileButton = document.querySelector(".edit-profile-button"); 
    const medicalHistoryInput = document.getElementById('medicalHistoryInput');

    editProfileButton.addEventListener("click", function() {
        if (editProfileButton.textContent === "Save Changes" && validateProfile()) {
            const updatedData = {
                dob: document.getElementById("dobInput").value,
                height: document.getElementById("heightInput").value,
                weight: document.getElementById("weightInput").value,
                gender: document.getElementById("genderInput").value,
                emergencyName: document.getElementById("emergencyNameInput").value,
                emergencyPhone: document.getElementById("emergencyPhoneInput").value,
                medicalHistory: medicalHistoryInput.value,
            };

            updateProfile(updatedData);
        }
    });
});

