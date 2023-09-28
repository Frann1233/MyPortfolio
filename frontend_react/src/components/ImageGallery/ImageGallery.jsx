import React, { useState, useCallback, useEffect } from "react";
import "./ImageGallery.scss";
import TextZoneSectionStart from "../TextZone/TextZoneSectionStart";
import TextZoneSectionEnd from "../TextZone/TextZoneSectionEnd";
import { portfolioImages } from "../../constants/images";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import ImageViewer from "react-simple-image-viewer";

const ImageGallery = () => {
  const [imageViewingIndex, setImageViewingIndex] = useState(0);
  const [imageViewerOpen, setImageViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setImageViewingIndex(index);
    setImageViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setImageViewingIndex(0);
    setImageViewerOpen(false);
  };

  useEffect(() => {
    if (imageViewerOpen) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "inherit";
    }
  }, [imageViewerOpen]);

  return (
    <div className="app_work_gallery_container">
      <TextZoneSectionStart />
      <div className="items">
        {portfolioImages.map((imageArray, index) => {
          return (
            <div key={index} onClick={() => openImageViewer(index)}>
              <ImageGalleryItem imageSrc={imageArray[0]} />
            </div>
          );
        })}
      </div>
      <TextZoneSectionEnd />

      {imageViewerOpen && (
        <ImageViewer
          src={portfolioImages[imageViewingIndex]}
          currentIndex={0}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
};

export default ImageGallery;
