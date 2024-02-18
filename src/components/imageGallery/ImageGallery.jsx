import React from 'react';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';
import '../styles.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem
          onImageClick={onImageClick}
          key={image.id}
          image={image}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
