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

const formData = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    phone: phone,
    dob: dob,
    gender: gender,
    height: height,
    weight: weight,
    emergency_name: emergencyName,
    emergency_phone: emergencyPhone,
    medical_history: medicalHistory,
  };

const patient = `https://api.astrafort.tech/v1/patient/register`;
window.onload = function() {
    // Fetch user data when the page loads
    let searchParams = new URLSearchParams(formData);
    fetch(logInUrl, {
        method: "GET",
        headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        },
        body: searchParams.toString(),
    })
    .then(response => response.json())
    .then(data => {
      // Populate the profile with the user's data
      document.querySelector('.profile-full-name').textContent = data.firstName + ' ' + data.lastName;
      document.querySelector('.profile-info .info-item p').textContent = data.email;
      document.querySelector('.profile-info .info-item p').textContent = data.phone_number;
      // Add other user data here...
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
  

  window.onload = function() {
    // Fetch user data when the page loads
    let searchParams = new URLSearchParams(formData);
    fetch(logInUrl, {
        method: "GET",
        headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        },
        body: searchParams.toString(),
    })
    .then(response => response.json())
    .then(data => {
      // Check user role and update links accordingly
      if(data.role === 'doctor') {
          document.querySelector('.header-nav-items a[href="#"]').href = "doctors_profile.html";
          document.querySelector('.mobile-nav-items a[href="#"]').href = "doctors_profile.html";
      } else if(data.role === 'patient') {
          document.querySelector('.header-nav-items a[href="#"]').href = "patients_profile.html";
          document.querySelector('.mobile-nav-items a[href="#"]').href = "patients_profile.html";
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
 
