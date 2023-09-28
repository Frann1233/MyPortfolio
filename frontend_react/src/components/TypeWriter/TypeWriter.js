import React, { useState, useEffect, useRef } from "react";
import "./TypeWriter.scss";

const TypeWriter = ({ text, className = "", delay = 0 }) => {
  const index = useRef(0);

  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    index.current = 0;
    setCurrentText("");
  }, [text]);

  useEffect(() => {
    let timeOutId;
    let initalTimeOutId;
    initalTimeOutId = setTimeout(() => {
      timeOutId = setInterval(() => {
        setCurrentText((value) => value + text.charAt(index.current));
        index.current += 1;
      }, 100);
    }, delay);
    return () => {
      clearTimeout(initalTimeOutId);
      clearInterval(timeOutId);
    };
  }, [text]);

  return <p className={className}>{currentText}</p>;
};

export default TypeWriter;
