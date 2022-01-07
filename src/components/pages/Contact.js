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
      <h2>Contact Me</h2>
      <form id="form-contact" onSubmit={handleSubmit}>
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          defaultValue={name}
          onBlur={handleChange}
        ></input>
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          defaultValue={email}
          onBlur={handleChange}
        ></input>
        <label for="message">Message</label>
        <textarea
          type="text"
          name="message"
          rows="3"
          defaultValue={message}
          onBlur={handleChange}
        ></textarea>
        <button type="submit">Submit</button>

{/* if user doesn't enter name or email correctly (meaning the handleChange function finds something false) then display error message) */}
        <div>
          {errorMessage && (
            <div>
              <h3>{errorMessage}</h3>
            </div>
          )}
        </div>
      </form>
            <br></br><br></br>
      <h2>Better Yet...</h2>
      <p>
        Just email me:{" "}
        <a href="mailto:alexdmacon@gmail.com">alexdmacon@gmail.com</a>
      </p>
    </div>
  );
};

export default Contact;
