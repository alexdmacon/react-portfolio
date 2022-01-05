import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact Me</h1>
      <form>
        <label for="name">Name</label>
        <input type="text"></input>
        <label for="email"> Email </label>
        <input type="text"></input>
        <label for="name">Message</label>
        <textarea></textarea>
        <button type="submit" className="send">Send</button>
      </form>
    </div>
  );
};

export default Contact;
