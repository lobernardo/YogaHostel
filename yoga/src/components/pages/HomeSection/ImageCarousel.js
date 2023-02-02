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
      <button className={styles.btn_back_home} onClick={handlePrevious}>Mais fotos</button>
      <img src={images[index]} alt="img-carousel" />
      <button className={styles.btn_next_home} onClick={handleNext}>Mais fotos</button>
    </div>
  );
};

export default ImageCarousel;