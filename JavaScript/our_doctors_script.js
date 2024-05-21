function capitalizeName(name) {
  return name
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

//Retrieve all doctors dynamically from db
document.addEventListener("DOMContentLoaded", () => {
  const getAllDoctors = "https://api.astrafort.tech/v1/doctor/all";
  const loadingIcon = document.getElementById("loadingIcon");

  function showLoading() {
    loadingIcon.style.display = "block";
  }

  function hideLoading() {
    loadingIcon.style.display = "none";
    loadingContainer.style.display = "none";
  }

  showLoading(); // Show the loading icon before fetching data

  fetch(getAllDoctors, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      hideLoading(); // Hide the loading icon after fetching data
      if (data && data.length > 0) {
        populateDoctors(data);
      }
    })
    .catch((error) => {
      hideLoading(); // Hide the loading icon if there's an error
      console.error("Error fetching doctors:", error);
    });
});


function viewSchedule(doctorId) {
  if (checkAuthentication()) {
    window.location.href = `doctors_schedule.html?doctorId=${doctorId}`;
  } else {
    showNotificationModal("Please sign in to book a consultation.");
    setTimeout(() => {
      closeNotificationModal();
      window.location.href = "index.html"; // Redirect to the login page after 10 seconds
    }, 2000); // 2 seconds
  }
}

function populateDoctors(doctors) {
  const doctorsContainer = document.getElementById("our-doctors-content");
  doctorsContainer.innerHTML = ""; // Clear existing entries if any

  doctors.forEach((doctor) => {
    const doctorCard = `
      <div class="card">
        <div class="circle">
          <div class="image-box">
            <img src="${
              doctor.image || "Images_Assets/Images/blank-profile-photo.png"
            }" alt="Dr. ${capitalizeName(doctor.first_name)} ${capitalizeName(
      doctor.last_name
    )}">
          </div>
        </div>
        <div class="our-doc-content">
          <h3>Dr. ${capitalizeName(doctor.first_name)} ${capitalizeName(
      doctor.last_name
    )}</h3>
          <p>${doctor.professionalBio}</p>
    <button class="filled-button appointment-button" onclick="viewSchedule('${
      doctor.id
    }')">Book Consultation</button>        
    </div>
      </div>
    `;
    doctorsContainer.innerHTML += doctorCard;
  });
}
