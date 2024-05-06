// window.onload = function() {
//     fetch('https://your-backend-api.com/doctors')
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
