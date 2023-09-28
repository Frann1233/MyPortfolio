import React from "react";
import "./Form.scss";

const Form = () => {
  return (
    <div>
      <form action="https://formspree.io/f/xjvdrrbp" method="POST">
        <div className="app_contact_form_inputs">
          <div className="app_contact_form_first_row">
            <label htmlFor="name"></label>
            <input type="text" id="name" name="name" placeholder="Name" />

            <label htmlFor="name"></label>
            <input type="text" id="email" name="email" placeholder="Email" />
          </div>
          <div className="app_contact_form_second_row">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
            />
          </div>
          <div className="app_contact_form_third_row">
            <label htmlFor="name"></label>
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="Message"
            />
          </div>
        </div>
        <div className="app_contact_form_button_container">
          <button
            type="submit"
            className="app_contact_section_button slide_right"
          >
            Send message!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
