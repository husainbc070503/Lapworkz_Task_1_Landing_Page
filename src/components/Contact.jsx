import React from "react";

const Contact = () => {
  return (
    <div
      className="contact-container"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="heading">
        <h1 className="primary-heading">Have Question In Mind</h1>
        <h1 className="primary-heading">Let Us Help You?</h1>
      </div>
      <div className="form">
        <input
          type="email"
          name="email"
          id="email"
          className="input-form"
          placeholder="yourmail@gmail.com"
        />
        <button type="button" className="form-button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
