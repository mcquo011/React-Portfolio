import React, { useState } from "react";
import "../assets/css/contact.css";
import emailjs from "emailjs-com"; // Import EmailJS

const ContactForm = () => {
const [formData, setFormData] = useState({
  to_name: "Maggie",
  from_name: "",
  email: "",
  message: "",
});

const handleChange = (event) => {
  if (event.target.name === "name") {
    setFormData({ ...formData, from_name: event.target.value });
  } else {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
};


  const handleSubmit = (event) => {
    event.preventDefault();


    const serviceID = "service_m1ywoxw";
    const templateID = "template_4qe4veg";
    const userID = "aYMGORdACoHQoFtBQ";

    emailjs.send(serviceID, templateID, formData, userID).then(
      (response) => {
        console.log("Email sent successfully:", response);
      },
      (error) => {
        console.log("Email sending error:", error);
      }
    );
  };

  return (
    <div className="contact-form-container">
      <h2 className="contactTitle">Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
      <div>
        <p className="or">Or Email me at omcquown@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactForm;
