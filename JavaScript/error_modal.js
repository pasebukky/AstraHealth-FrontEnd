// let modal = document.getElementById("errorModal");
// let span = document.getElementsByClassName("close")[0];

// // Close the modal when the user clicks on <span> (x) or anywhere outside of the modal
// span.onclick = modal.onclick = function(event) {
//   if (event.target == modal || event.target == span) {
//     modal.style.display = "none";
//   }
// }

// function showErrorModal(errorMessage) {
//   // Set the error message in the modal and display it
//   document.getElementById("error-content").innerHTML = errorMessage;
//   modal.style.display = "block";
// }






var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle errors
window.onerror = function (msg, url, lineNo, columnNo, error) {
    var string = msg.toLowerCase();
    var substring = "script error";
    if (string.indexOf(substring) > -1){
        alert('Script Error: See Browser Console for Detail');
    } else {
        var message = msg
            
        // var message = [
        //     'Message: ' + msg,
        //     'URL: ' + url,
        //     'Line: ' + lineNo,
        //     'Column: ' + columnNo,
        //     'Error object: ' + JSON.stringify(error)
        // ].join(' - ');

        document.getElementById("error-content").innerHTML = message;
        modal.style.display = "block";
    }

    return false;
};




// var modal = document.getElementById("myModal");
// var span = document.getElementsByClassName("close")[0];

// // Close the modal when the user clicks on <span> (x) or anywhere outside of the modal
// span.onclick = modal.onclick = function(event) {
//   if (event.target == modal || event.target == span) {
//     modal.style.display = "none";
//   }
// }

// // Define your URL
// var url = 'https://api.astrafort.tech/'; // Replace with your actual URL

// // Make the fetch request
// fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData),
//   })
//   .then(response => response.json()) // Parse the JSON from the response
//   .then(data => {
//     if (!data.success) { // Replace 'success' with the actual property name that indicates success in your API
//       throw new Error(data.message); // Replace 'message' with the actual property name for the error message in your API
//     }
//     // Handle successful request
//   })
//   .catch(error => {
//     document.getElementById("error-content").innerHTML = error.message;
//     modal.style.display = "block";
//   });
  