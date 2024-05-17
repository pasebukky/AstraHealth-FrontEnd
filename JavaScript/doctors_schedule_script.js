//Profile validation and updating

// Function to capitalize first characters of words
function capitalizeName(name) {
  return name
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

//Retrieve doctors profile from the database
document.addEventListener("DOMContentLoaded", function () {
  const getDoctorProfile = `https://api.astrafort.tech/v1/doctor/schedule`;

  fetch(getDoctorProfile, {
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
      console.log(data);
      const profileImageElement = document.querySelector(".schedule-image");
      if (data.image) {
        profileImageElement.src = data.image;
      } else {
        profileImageElement.src =
          "Images_Assets/Images/blank-profile-photo.png";
      }
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
});
