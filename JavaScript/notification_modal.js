const showNotificationModal = (message) => {
  // Display modal
  const modal = document.getElementById("notification-modal");
  modal.style.display = "block";
  
  // Set modal text
  const modalText = document.getElementById("modal-text");
  modalText.textContent = message;
};

const closeNotificationModal = () => {
  // Hide modal
  const modal = document.getElementById("notification-modal");
  modal.style.display = "none";
};

// Event listener for closing the modal
const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", closeNotificationModal);

