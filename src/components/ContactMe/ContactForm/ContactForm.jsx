import React, { useState } from "react";
import "./ContactForm.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    try {
      const result = await fetch("https://ahmadjaffal.netlify.app/.netlify/functions/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: formData.email,
          SenderName: `${formData.firstname} ${formData.lastname}`,
          text: formData.message,
        }),
      });

      const data = await result.json();

      if (result.ok) {
        MySwal.fire({
          title: "Success!",
          text: "Email sent successfully!",
          icon: "success",
        });
      } else {
        throw new Error(data.message || "Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
      MySwal.fire({
        title: "Error!",
        text:
          error.message ||
          "Failed to send email. Check the console for more information.",
        icon: "error",
      });
    }
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
