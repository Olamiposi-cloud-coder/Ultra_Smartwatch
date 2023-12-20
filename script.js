document.addEventListener("DOMContentLoaded", function () {
  const placeOrderButtons = document.querySelectorAll('.placeOrderButton');
  const orderForm = document.getElementById("orderForm");
  const submitOrderButton = document.getElementById("submitOrderButton");
  const whatsappButton = document.getElementById("whatsappButton");

  // Add event listeners to all "PLACE MY ORDER" buttons
  placeOrderButtons.forEach(button => {
    button.addEventListener("click", function () {
      // Scroll to the form section
      scrollToElement(orderForm);
    });
  });

  // Add event listener to the "YES! PLACE MY ORDER" button
  submitOrderButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Submit the form if it's valid
    if (validateForm(orderForm)) {
      sendOrderDetails();
    }
  });

  // Add event listener to the "PLACE ORDER VIA WHATSAPP" button
  whatsappButton.addEventListener("click", function () {
    // Redirect to WhatsApp or replace this with your actual WhatsApp link
    window.location.href = "https://wa.me/1234567890";
  });

  // Function to scroll to a specific element
  function scrollToElement(element) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  // Function to send order details
  function sendOrderDetails() {
    // Extract form data
    const formData = new FormData(orderForm);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    // Make a POST request to the server
    fetch('http://localhost:3000/api/v1.0/email/send', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formObject),
})

      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        console.log(data); // Log the response from the server
        alert('Your order has been placed!'); // Display an alert to the user
        orderForm.reset(); // Optionally reset the form
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert('There was an error placing your order. Please try again.'); // Display an alert for errors
      });
  }

  // Function to validate the form
  function validateForm(form) {
    // Add your form validation logic here
    // Return true if the form is valid, false otherwise
    return true;
  }
});


let accordance = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < accordance.length; i++) {
  accordance[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

