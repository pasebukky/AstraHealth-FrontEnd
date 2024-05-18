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

  fetch(getAllDoctors, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data && data.length > 0) {
        populateDoctors(data);
      }
    })
    .catch((error) => console.error("Error fetching doctors:", error));
});

function populateDoctors(doctors) {
  const doctorsContainer = document.getElementById("our-doctors-content");
  doctorsContainer.innerHTML = ""; // Clear existing entries if any

  doctors.forEach((doctor) => {
    const doctorCard = `
      <div class="card">
        <div class="circle">
          <div class="image-box">
            <img src="${
              doctor.image || "Images_Assets/Images/default_doc.png"
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
          <button class="filled-button appointment-button">BOOK CONSULTATION</button>
        </div>
      </div>
    `;
    doctorsContainer.innerHTML += doctorCard;
  });
}
