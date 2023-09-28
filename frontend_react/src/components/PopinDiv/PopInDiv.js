// import React, { useState } from "react";
// import "./PopInDiv.scss";

// const PopInDiv = () => {
//   const [showContent, setShowContent] = useState(false);

//   setTimeout(() => {
//     setShowContent(true);
//   }, 1400);

//   return (
//     <div className={showContent ? "pop-in showDiv" : "hideDiv"}>
//       <p className="app_first_section_job_title">Front End Developer</p>
//     </div>
//   );
// };

// export default PopInDiv;

import React, { useState, useEffect } from "react";
import "./PopInDiv.scss";

const PopInDiv = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`pop-in ${isVisible ? "visible" : ""}`}>
      <p className="app_first_section_job_title">Front End Developer</p>
    </div>
  );
};

export default PopInDiv;
