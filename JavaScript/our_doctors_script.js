// window.onload = function() {
//     fetch('https://api.astrafort.tech/v1/doctor/all')
//     .then(response => response.json())
//     .then(data => {
//         let doctorsBody = document.getElementById('doctors-body');
//         doctorsBody.innerHTML = ''; // Clear the existing content

//         data.forEach(doctor => {
//             let doctorDiv = document.createElement('div');
//             doctorDiv.className = 'doctors';

//             let img = document.createElement('img');
//             img.src = doctor.image;
//             img.alt = 'Doctor Image';
//             img.width = '240';

//             let h3 = document.createElement('h3');
//             h3.textContent = doctor.name;

//             let p = document.createElement('p');
//             p.textContent = doctor.description;

//             doctorDiv.appendChild(img);
//             doctorDiv.appendChild(h3);
//             doctorDiv.appendChild(p);

//             doctorsBody.appendChild(doctorDiv);
//         });
//     })
//     .catch(error => console.error('Error:', error));
// };

// document.getElementById('view-schedule-button').addEventListener('click', function() {
//     document.getElementById('calendly-widget').style.display = 'block';
// });

// Function to capitalize first characters of words
function capitalizeName(name) {
  return name
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

//Retrieve all doctors from db
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
