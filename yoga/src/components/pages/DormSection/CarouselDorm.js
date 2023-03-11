import React from 'react';
import ImageCarouselDorm from './ImageCarouselDorm';
import styles from './CarouselDorm.module.css'

const CarouselDorm = () => {
  const images = [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/422467835.jpg?k=2cd875a8d14653d4f97b1a2051bed733ba52ff5d5aaffe702dd583d49fd8fb88&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/129383477.jpg?k=d4cdbf1c24164365116711ce4765bbfa669885dba5573f7007d0e3ffc008daf0&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/129387260.jpg?k=7579807456297633d7b8929826f568cc13223e6f6e5ac0980d686aaaa5d7b5c4&o=&hp=1',
  ];

  return (
    <div className={styles.carousel__dorm}>
    <ImageCarouselDorm images={images} />
    </div>
  );
};

export default CarouselDorm;





