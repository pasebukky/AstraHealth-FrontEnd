//Profile validation and updating

// Function to capitalize first characters of words
function capitalizeName(name) {
  return name
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// Retrieves the doctors details from db
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const doctorId = urlParams.get("doctorId");

  if (doctorId) {
    fetchDoctorDetails(doctorId);
  } else {
    console.error("Doctor ID not found");
  }
});
function fetchDoctorDetails(doctorId) {
  fetch(`https://api.astrafort.tech/v1/doctor/${doctorId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const profileImageElement = document.querySelector(".schedule-image");
      profileImageElement.src =
        data.image || "Images_Assets/Images/blank-profile-photo.png";
      document.querySelector(
        ".profile-full-name"
      ).textContent = `Dr ${capitalizeName(data.first_name)} ${capitalizeName(
        data.last_name
      )}`;

      Cal("inline", {
        elementOrSelector: "#my-cal-inline",
        calLink: data.calendarLink,
        layout: "month_view",
      });
    })
    .catch((error) => {
      console.error("Fetch Error:", error);
    });
}

//Retrieve doctors profile from the database
// document.addEventListener("DOMContentLoaded", function () {
//   const getDoctorProfile = `https://api.astrafort.tech/v1/doctor/schedule`;

//   fetch(getDoctorProfile, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     credentials: "include",
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       const profileImageElement = document.querySelector(".schedule-image");
//       if (data.image) {
//         profileImageElement.src = data.image;
//       } else {
//         profileImageElement.src =
//           "Images_Assets/Images/blank-profile-photo.png";
//       }
//       document.querySelector(
//         ".profile-full-name"
//       ).textContent = `Dr ${capitalizeName(data.first_name)} ${capitalizeName(
//         data.last_name
//       )}`;
//       Cal("inline", {
//         elementOrSelector: "#my-cal-inline",
//         calLink: data.calendarLink,
//         layout: "month_view",
//       });
//     })

//     .catch((error) => {
//       console.error("Fetch Error:", error);
//     });
// });

//Retrieve all doctors from db
// const getAllDoctors = "https://api.astrafort.tech/v1/doctor/all";

// fetch(getAllDoctors, {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     if (data && data.length > 0) {
//       populateDoctors(data);
//     }
//   })
//   .catch((error) => console.error("Error fetching doctors:", error));

// function viewSchedule(doctorId) {
//   window.location.href = `doctors_schedule.html?doctorId=${doctorId}`;
// }

// function populateDoctors(doctors) {
//   const doctorsContainer = document.getElementById("our-doctors-content");
//   doctorsContainer.innerHTML = ""; // Clear existing entries if any

//   doctors.forEach((doctor) => {
//     const doctorCard = `
//             <div class="card">
//                 <div class="circle">
//                     <div class="image-box">
//                         <img src="${
//                           doctor.image || "Images_Assets/Images/default_doc.png"
//                         }" alt="${doctor.name}">
//                     </div>
//                 </div>
//                 <div class="our-doc-content">
//                     <h3>${doctor.name}</h3>
//                     <p>${doctor.description}</p>
//                     <button class="filled-button appointment-button" onclick="viewSchedule('${
//                       doctor.id
//                     }')">VIEW SCHEDULE</button>
//                 </div>
//             </div>
//         `;
//     doctorsContainer.innerHTML += doctorCard;
//   });
// }
