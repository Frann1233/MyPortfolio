import React, { useState, useEffect } from "react";
import "./Button.scss";

const Button = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 1500);
  }, []);

  return (
    <div className={showButton ? "animate showButton" : "hideButton"}>
      <button className="button">
        <a href="#Contact">Contact me!</a>
      </button>
    </div>
  );
};

export default Button;
