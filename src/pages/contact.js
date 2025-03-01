import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="page-container"> {/* Add this wrapper */}
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Please reach out using the contact details below or visit us on our social media profiles.</p>

        {/* Contact Details Section */}
        <div className="contact-details">
          <h2>Contact Details</h2>
          <ul>
            <li>📧 <strong>Email:</strong> info@saandeepani.com</li>
            <li>📞 <strong>Phone 1:</strong> +91 9866439005</li>
            <li>📞 <strong>Phone 2:</strong> +91 96661154561</li>
            <li>📞 <strong>Phone 3:</strong> +91 9110576985</li>
            <li>📍 <strong>Address:</strong> Ravindranagar, Padmavathi Colony, Mahabubnagar, Telangana, 509001, India</li>
          </ul>
        </div>

        {/* Social Media Links Section */}
        <div className="social-media">
          <h2>Follow Us</h2>
          <ul>
            <li><a href="https://www.instagram.com/saandeepanischool2025/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
