import React, { useState } from 'react';
import styles from './ImageCarouselDorm.module.css'





const ImageCarouselDorm = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    setIndex((index + images.length - 1) % images.length);
  };

  const handleNext = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div className={styles.carousel__image_dorm}>
      <img src={images[index]} alt="img-carousel" />
      <button className={styles.btn_change_dorm} onClick={handleNext}>Próx.</button>
      <button className={styles.btn_change_dorm} onClick={handlePrevious}>Ant.</button>
    </div>
  );
};

export default ImageCarouselDorm;