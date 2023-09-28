import React, { useEffect } from "react";
import "./Bouncing.scss";

export function BouncingLetters() {
  useEffect(() => {
    const elements = document.querySelectorAll(".bouncing-letters > span");
    elements.forEach((element) => {
      element.addEventListener("mouseover", (e) => bounce(e.target));
    });
    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseover", (e) => bounce(e.target));
      });
    };
  }, []);

  function bounce(letter) {
    if (!letter.classList.contains("bounce")) {
      letter.classList.add("bounce");
      setTimeout(function () {
        letter.classList.remove("bounce");
      }, 1000);
    }
  }

  return <div className="bouncing-letters"></div>;
}

export default BouncingLetters;
