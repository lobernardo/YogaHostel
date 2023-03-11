
import styles from './ImagesBeach.module.css'
import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';


    
    const ImagesBeach = ({ images }) => {
      const [index, setIndex] = useState(0);
    
      const handlePrevious = () => {
        setIndex((index + images.length - 1) % images.length);
      };
    
      const handleNext = () => {
        setIndex((index + 1) % images.length);
      };
    
      return (
        <div className={styles.carousel__image_beach}>
          <img src={images[index]} alt="img-carousel" />
          <button className={styles.btn_change_dorm_left} onClick={handlePrevious}><FaChevronLeft /></button>
          <button className={styles.btn_change_dorm_right} onClick={handleNext}><FaChevronRight /></button>
    
        </div>
      );
    };
    



export default ImagesBeach;