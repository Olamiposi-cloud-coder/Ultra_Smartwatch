document.addEventListener("DOMContentLoaded", function () {
    const placeOrderButtons = document.querySelectorAll('.placeOrderButton button');
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
    submitOrderButton.addEventListener("click", function () {
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
        // Replace the following with your actual code to send the order details via email
        const fullName = document.getElementById("text").value;
        const phoneNumber = document.getElementById("number").value;
        const state = document.getElementById("location").value;
        const address = document.getElementById("address").value;
        const quantity = document.getElementById("quantity").value;

        // Construct the email body
        const emailBody = `Full Name: ${fullName}\nPhone Number: ${phoneNumber}\nState: ${state}\nAddress: ${address}\nQuantity: ${quantity}`;

        // You can use an email API or another backend service to send the email
        // For simplicity, we'll just log the email body to the console
        console.log("Order Details:\n", emailBody);
        
        // Optionally, you can reset the form after submission
        orderForm.reset();
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
