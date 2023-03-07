import React, { useState } from 'react';
import styles from './ImageCarousel.module.css'





const ImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    setIndex((index + images.length - 1) % images.length);
  };

  const handleNext = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div className={styles.carousel__image}>
      <img src={images[index]} alt="img-carousel" />
      <button className={styles.btn_change} onClick={handleNext}>Próxima foto</button>
    </div>
  );
};

export default ImageCarousel;