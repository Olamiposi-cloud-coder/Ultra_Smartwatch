const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'musayinka89@gmail.com', // Replace with your Gmail email address
    pass: '$Cloud0705$'   // Replace with your Gmail password
  }
});

// Define a route to handle form submissions
app.post('/api/v1.0/email/send', (req, res) => {
  const { text, number, location, address, quantity } = req.body;

  // Compose the email
  const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'musayinka89@gmail.com', // Replace with your email address for receiving orders
    subject: 'New Order',
    text: `
      Full Name: ${text}
      Phone Number: ${number}
      State: ${location}
      Address: ${address}
      Quantity: ${quantity}
    `
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const cors = require('cors');
app.use(cors());

