import React, { useState } from "react";
import validateEmail from "../../utils/validateEmail";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {

    console.log(`I am now targeting ${e.target.name}`)

    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("You must enter a valid email");
      } else {
        setErrorMessage("");
      }
    } 

    else {
      if (!e.target.value.length) {
        setErrorMessage(`You must enter a ${e.target.name}`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="container">
      <div className="row d-flex">
        <div className="col-md-5 mr-auto">
      <h2>Contact Me</h2>
        <p className="mb-5">Send me an email (preferred), dispatch a carrier pigeon to my city and hope for the best, or fill out the contact form. Can't wait to hear from you. Or from the pigeon.</p>
        <ul className="list-unstyled pl-md-5 mb-5">
          <li className="d-flex mb-2">
          <span className="mr-3">
            <span className="fas fa-envelope"></span>
            <a href="mailto:alexdmacon@gmail.com" className="contact-link">alexdmacon@gmail.com</a>
            </span>
          </li>
          <li className="d-flex mb-2">
            <div><span className="mr-3">
            <span className="fas fa-map-pin"></span>
            <a href="https://www.google.com/maps/place/Dallas,+TX/data=!4m2!3m1!1s0x864c19f77b45974b:0xb9ec9ba4f647678f?sa=X&ved=2ahUKEwijs6ihobD1AhWEnGoFHWlWCNgQ8gF6BAgOEAE" target="_blank" className="contact-link">Dallas, TX</a>
            </span>
            </div>
          </li>
        </ul>
      </div>


      <div className="col-md-6">
      <form className="mb-5" id="form-contact" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12 form-group">
       <p></p> 
      <div>
       <label for="name" className="col-form-label label">Name</label>
       </div>
        <input
          type="text"
          name="name"
          defaultValue={name}
          onBlur={handleChange}
        ></input>
        </div>
        </div>
        <div className="row">
          <div className="col-md-12 form-group">
            <div>
        <label for="email" className="col-form-label label">Email</label>
        </div>
        <input
          type="email"
          name="email"
          defaultValue={email}
          onBlur={handleChange}
        ></input>
        </div>
        </div>
        <div className="row">
          <div className="col-md-12 form-group">
            <div>
        <label for="message" className="col-form-label label">Message</label>
        </div>
        <textarea
          type="text"
          name="message"
          cols="30"
          rows="7"
          defaultValue={message}
          onBlur={handleChange}
        ></textarea>
        </div>
        </div>
        <div className="row">
          <div className="col-md-12">
        <button type="submit">Submit</button>
        </div>
        </div>

{/* if user doesn't enter name or email correctly (meaning the handleChange function finds something false) then display error message) */}
        <div>
          {errorMessage && (
            <div>
              <h3>{errorMessage}</h3>
            </div>
          )}
        </div>
      </form>

      </div>

      </div>

    </div>
  );
};

export default Contact;
