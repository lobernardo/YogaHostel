import React from 'react';
import styles from './PhotoGrid.module.css'
import ImagesBeach from './ImagesBeach';



function PhotoGrid () {

  const images = [
    'https://www.transportal.com.br/noticias/wp-content/uploads/2019/02/Praia-do-meio-Praias-de-Trindade.jpg',
    'https://www.essemundoenosso.com.br/wp-content/uploads/2020/03/praias-de-trindade-2-dest-740x463.jpg',
    'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/262000/262559-Ilha-Grande-Bay.jpg',
    'https://www.viagenscinematograficas.com.br/wp-content/uploads/2013/04/Trindade-Praia-do-Cachadaco-2.jpg'
  ];

  return (
    <div className={styles.photo_grid}>
      
      <ImagesBeach images={images} />
      
    </div>
  )
}

export default PhotoGrid;