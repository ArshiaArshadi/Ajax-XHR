//                  Ajax

// HTTP status codes : 200

// Select button
document
  .querySelector(".btn btn-primary btn-custom")
  .addEventListener("click", loadDataFirstStatus);
  console.log("Success");

// Function for handling first button
function loadDataFirstStatus() {
  console.log("Success");

  // Create object
  const XHR = new XMLHttpRequest();

  // Open a new request
  XHR.open("GET", "./test.txt");

  // Load request
  XHR.onload = function () {
    if (this.status === 200) {
      console.log("Success");
    } else {
      console.log("not found");
    }
  };

  // Send request
  XHR.send();
}


// _________________________________________________________________________
// HTTP status codes = 404

// Select button
document
  .querySelector(".btn btn-primary btn-custom")
  .addEventListener("click", loadDataSecondStatus);

// Function for handling second button

function loadDataSecondStatus() {
  // Create object
  const XHR = new XMLHttpRequest();

  // Open a new request
  XHR.open("GET", "./non-existent-file.txt");

  // Load request
  XHR.onload = function () {
    if (this.status === 404) {
      alert("Status code: " + this.status);
    } else {
      //   Swal.fire({
      //     icon: "error",
      //     title: "Oops...",
      //     text: "Something went wrong!",
      //     footer: '<a href="#">Why do I have this issue?</a>',
      //   });
    }
  };

  // Send request
  XHR.send();
}

// HTTP status codes = 500


