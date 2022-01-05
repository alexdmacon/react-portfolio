import React from "react";
import validateEmail from "../../utils/validateEmail";

function Form() {
    
}



const Contact = () => {
  return (
    <div className="container">
      <h2>Contact Me</h2>
      <form>
        <label for="name">Name</label>
        <input type="text"></input>
        <label for="email"> Email </label>
        <input type="text"></input>
        <label for="name">Message</label>
        <textarea></textarea>
        <button type="submit">Submit</button>
      </form>





    <h2>Better Yet...</h2>
    <p>Just email me: <a href="mailto:alexdmacon@gmail.com">alexdmacon@gmail.com</a></p>
    </div>
  );
};

export default Contact;
