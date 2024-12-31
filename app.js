//                  Ajax

// HTTP status codes : 200

// Select button
document
  .querySelector(".btn btn-primary btn-custom")
  .addEventListener("click", loadDataFirstStatus);
// Function for handling first button
function loadDataFirstStatus() {
  // Create object
  const XHR = new XMLHttpRequest();

  // Open a new request
  XHR.open("GET", "./README.md");

  // Load request
  XHR.onload = function () {
    if (this.status === 200) {
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  // Send request
  XHR.send();
}

// HTTP status codes
// HTTP status codes
