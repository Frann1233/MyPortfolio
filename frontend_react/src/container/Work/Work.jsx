import React, { useEffect } from "react";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import "./Work.scss";
import "aos/dist/aos.css";
import Aos from "aos";
import { BouncingLetters } from "../../components/Bouncing/Bouncing";
import { images } from "../../constants";
import {
  TextZoneH2Start,
  TextZoneH2End,
  TextZonePStart,
  TextZonePEnd,
} from "../../components";

const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  BouncingLetters();

  return (
    <div id="Work" className="app_work_container">
      <div className="app_work_text_container">
        <div data-aos="fade-up" className="app_work_title">
          <TextZoneH2Start />
          <h2 className="bouncing-letters main-h2">
            <span>M</span>
            <span>y</span>
            <span>&nbsp;</span>
            <span>P</span>
            <span>o</span>
            <span>r</span>
            <span>t</span>
            <span>f</span>
            <span>o</span>
            <span>l</span>
            <span>i</span>
            <span>o</span>
          </h2>
          <TextZoneH2End />
        </div>
        <div data-aos="fade-up" style={{
          marginTop: '1rem',
          marginBottom: '1rem'
        }}>
          <TextZonePStart />
          <p className="main-p">
            My simple frontend gallery aims to showcase a diverse selection of
            carefully crafted websites, ranging from elegant portfolios to
            functional platforms. I hope to inspire visitors and provide them
            with a glimpse into the amazing world of frontend design.
          </p>
          <TextZonePEnd />
        </div>
      </div>
      <div className="app_work_button_container">
        {/* <button
          id="/gallery"
          data-aos="fade-up"
          className="app_work_button slide_right"
        >
          <a href="/Gallery">See more!</a>
        </button> */}
      </div>
      <ImageGallery />
      <div className="popup-image">
        <span>&times;</span>
        <img src={images.portfolio} />
      </div>
    </div>
  );
};

export default Work;
