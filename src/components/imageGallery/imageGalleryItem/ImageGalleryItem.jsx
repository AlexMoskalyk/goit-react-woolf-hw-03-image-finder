import React from 'react';
import '../../styles.css';

const ImageGalleryItem = ({ image, onImageClick }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => onImageClick(image)}>
      <img
        className="ImageGalleryItem-image"
        src={image.webformatURL}
        alt={image.type}
      />
    </li>
  );
};

export default ImageGalleryItem;
