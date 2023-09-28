import React from "react";

import "./FirstSection.scss";
import TypeWriter from "../../components/TypeWriter/TypeWriter";
import Button from "../../components/Button/Button";
import PopInDiv from "../../components/PopinDiv/PopInDiv";
import AnimatedTitle from "../../components/AnimatedTitle/AnimatedTitle";
import { BouncingLetters } from "../../components/Bouncing/Bouncing";

const FirstSection = () => {
  BouncingLetters();
  return (
    <div id="Home" className="app_first_section">
      <div className="app_first_section_text">
        <div className="app_first_section_typewriter_first">
          <div className="app_first_section_animated">
            <AnimatedTitle />
          </div>
        </div>
        <PopInDiv />
        <Button className="slide_right"></Button>
      </div>
    </div>
  );
};

export default FirstSection;
