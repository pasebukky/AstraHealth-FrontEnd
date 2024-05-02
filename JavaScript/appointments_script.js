document.addEventListener("DOMContentLoaded", function() {
    let appButton = document.querySelector(".app-button");

    appButton.addEventListener("click", function() {
        window.location.href = "our_doctors.html";
    });
});

function showPatientAppointments() {
    document.getElementById('patientAppointments').classList.remove('hidden');
    document.getElementById('doctorAppointments').classList.add('hidden');
}

function showDoctorAppointments() {
    document.getElementById('doctorAppointments').classList.remove('hidden');
    document.getElementById('patientAppointments').classList.add('hidden');
}