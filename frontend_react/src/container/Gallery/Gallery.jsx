import React from "react";
import "./Gallery.scss";
import ImageGallery from "../../components/ImageGallery/ImageGallery";

const Gallery = () => {
  return (
    <div className="gallery_container">
      <div className="test">
        <ImageGallery />
      </div>
    </div>
  );
};

export default Gallery;
