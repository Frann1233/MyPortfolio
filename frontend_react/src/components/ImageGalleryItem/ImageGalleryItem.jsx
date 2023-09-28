import React from "react";
import "./ImageGalleryItem.scss";

const ImageGalleryItem = ({ imageSrc }) => {
  return (
    <div className="item">
      <div className="item-image">
        <img src={imageSrc} alt="" />
      </div>
      <div className="item-text">
        <div className="item-text-wrap">
          <p className="item-text-category">view project</p>
        </div>
      </div>
    </div>
  );
};

export default ImageGalleryItem;
