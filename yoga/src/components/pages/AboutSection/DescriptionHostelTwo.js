import styles from  './DescriptionHostelTwo.module.css'
import chale1 from '../../assets/chale1.png'

import 'animate.css'

function DescriptionHostelTwo (){
    return(
       
        <div className={styles.description__hostel__two__container}>
        <img className={styles.img__apoio__about__description} src={chale1}/>
        </div>  
      
    )
}

export default DescriptionHostelTwo