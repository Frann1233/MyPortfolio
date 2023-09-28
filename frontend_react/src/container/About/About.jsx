import React, { useEffect } from "react";

import "./About.scss";
import Aos from "aos";
import { BouncingLetters } from "../../components/Bouncing/Bouncing";
import {
  TextZoneSectionStart,
  TextZoneSectionEnd,
  TextZoneH2Start,
  TextZoneH2End,
  TextZonePStart,
  TextZonePEnd,
} from "../../components";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  BouncingLetters();
  return (
    <div className="app_about_container" id="About">
      <div className="app_about_text_container">
        <div data-aos="fade-up" className="app_about_title">
          <TextZoneH2Start />
          <h2 className="bouncing-letters main-h2">
            <span>M</span>
            <span>e</span>
            <span>,</span>
            <span>&nbsp;</span>
            <span>M</span>
            <span>y</span>
            <span>s</span>
            <span>e</span>
            <span>l</span>
            <span>f</span>
            <span>&nbsp;</span>
            <span>a</span>
            <span>n</span>
            <span>d</span>
            <span>&nbsp;</span>
            <span>I</span>
          </h2>
          <TextZoneH2End />
        </div>
        <div data-aos="fade-up" className="app_about_description">
          <TextZonePStart />
          <p className="main-p">
            Hi, I'm Fran. I have 1 year of experience in web development and a
            good understanding of HTML and CSS/SCSS. <br /> I'm passionate about
            creating visually appealing and responsive websites, <br />
            and I'm always eager to learn and grow in my field. <br />{" "}
            Currently, I'm on the beginning of my journey with React and
            JavaScript,
            <br /> and I'm dedicated to expanding my skillset and contributing
            to a team.
          </p>
          <TextZonePEnd />
        </div>
      </div>
      <div className="app_about_skills_container">
        <div data-aos="fade-up" className="app_about_skills_technical">
          <TextZoneH2Start />
          <h2 className="bouncing-letters main-h2">
            <span>T</span>
            <span>e</span>
            <span>c</span>
            <span>h</span>
            <span>n</span>
            <span>i</span>
            <span>c</span>
            <span>a</span>
            <span>l</span>
            <span>&nbsp;</span>
            <span>S</span>
            <span>k</span>
            <span>i</span>
            <span>l</span>
            <span>l</span>
            <span>s</span>
          </h2>
          <TextZoneH2End />
        </div>
        <TextZoneSectionStart />
        <div className="app_about_skills_margin">
          <h3>HTML</h3>
          <div className="app_about_skills_progress">
            <div className="html"></div>
          </div>
        </div>
        <div className="app_about_skills_margin">
          <h3>CSS</h3>
          <div className="app_about_skills_progress">
            <div className="css"></div>
          </div>
        </div>
        <div className="app_about_skills_margin">
          <h3>JAVASCRIPT</h3>
          <div className="app_about_skills_progress">
            <div className="javascript"></div>
          </div>
        </div>
        <div className="app_about_skills_margin">
          <h3>REACT</h3>
          <div className="app_about_skills_progress">
            <div className="react"></div>
          </div>
        </div>
        <div className="app_about_skills_margin">
          <h3>FIGMA</h3>
          <div className="app_about_skills_progress">
            <div className="figma"></div>
          </div>
        </div>
      </div>
      <TextZoneSectionEnd />
    </div>
  );
};

export default About;
