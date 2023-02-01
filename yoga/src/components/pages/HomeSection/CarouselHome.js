import React from 'react';
import ImageCarousel from './ImageCarousel';
import styles from './CarouselHome.module.css'

const CarouselHome = () => {
  const images = [
    'https://trindade-sea-and-forest-yoga-hostel-trindade-rio-de.ibooked.com.br/data/Photos/r1536x546/13409/1340964/1340964293/Trindade-Sea-And-Forest-Yoga-Hostel-Exterior.JPEG',
    'https://trindade-sea-and-forest-yoga-hostel-trindade-rio-de.ibooked.com.br/data/Photos/r1536x546/13409/1340963/1340963327/Trindade-Sea-And-Forest-Yoga-Hostel-Exterior.JPEG',
    'https://trindade-sea-and-forest-yoga-hostel-trindade-rio-de.ibooked.com.br/data/Photos/r1536x546/13409/1340962/1340962289/Trindade-Sea-And-Forest-Yoga-Hostel-Exterior.JPEG',
  ];

  return (
    <div className={styles.carousel__home}>
    <ImageCarousel images={images} />
    </div>
  );
};

export default CarouselHome;





