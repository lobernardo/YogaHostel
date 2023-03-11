import React, { useState } from 'react';
import styles from './ImageCarouselDorm.module.css'
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';






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
      <button className={styles.btn_change_dorm_left} onClick={handlePrevious}><FaChevronLeft /></button>
      <button className={styles.btn_change_dorm_right} onClick={handleNext}><FaChevronRight /></button>

    </div>
  );
};

export default ImageCarouselDorm;