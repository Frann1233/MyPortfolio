import React, { useEffect } from "react";

import "./Contact.scss";
import Aos from "aos";
import Form from "../../components/Form/Form";
import { images } from "../../constants";
import { BouncingLetters } from "../../components/Bouncing/Bouncing";
import {
  TextZoneFormStart,
  TextZoneFormEnd,
  TextZoneH2Start,
  TextZoneH2End,
  TextZonePStart,
  TextZonePEnd,
} from "../../components";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  BouncingLetters();
  return (
    <div className="app_contact_container" id="Contact">
      <div className="app_contact_left_and_right_container">
        <div className="app_contact_left_container">
          <div data-aos="fade-up" className="app_contact_title">
            <TextZoneH2Start />
            <h2 className="bouncing-letters main-h2">
              <span>C</span>
              <span>o</span>
              <span>n</span>
              <span>t</span>
              <span>a</span>
              <span>c</span>
              <span>t</span>
              <span>&nbsp;</span>
              <span>M</span>
              <span>e</span>
            </h2>
            <TextZoneH2End />
          </div>
          <div data-aos="fade-up" className="app_contact_description">
            <TextZonePStart />
            <p className="main-p">
              I'm interested in freelance opportunities, especially ambitious or
              large projects. However, if you have any other requests or
              questions, please don't hesitate to use the form!
            </p>
            <TextZonePEnd />
          </div>
          <div className="app_contact_form">
            <TextZoneFormStart />
            <Form />
            <TextZoneFormEnd />
          </div>
        </div>
        <div className="app_contact_right_container">
          <div className="app_contact_image_container">
            <img src={images.croata} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
