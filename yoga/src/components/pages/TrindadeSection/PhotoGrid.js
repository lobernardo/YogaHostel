import React from 'react';
import styles from './PhotoGrid.module.css'
import ImagesBeach from './ImagesBeach';



function PhotoGrid () {

  const images = [
    'https://www.passagenspromo.com.br/blog/wp-content/uploads/2020/12/praias-de-trindade-praia-do-cachadaco.jpg',
    'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/262000/262559-Ilha-Grande-Bay.jpg',
    'https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/pnf3pelynvf1jjh4t9r9'
  ];

  return (
    <div className={styles.photo_grid}>
      
      <ImagesBeach images={images} />
      
    </div>
  )
}

export default PhotoGrid;