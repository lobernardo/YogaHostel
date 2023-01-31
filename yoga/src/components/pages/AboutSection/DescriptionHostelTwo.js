import styles from  './DescriptionHostelTwo.module.css'
import chale1 from '../../assets/chale1.png'
import chale2 from '../../assets/chale2.png'
import cafe2 from '../../assets/cafe2.png'

import 'animate.css'

function DescriptionHostelTwo (){
    return(
       
        <div className={styles.description__hostel__two__container}>
                    <div className={styles.card__picture__about__two}>
                        <img className={styles.img__apoio__about__description} src={chale1}/>
                        <img className={styles.img__apoio__about__description__dois} src={chale2}/>
                        <img className={styles.img__apoio__about__description__tres} src={cafe2}/>
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
        </div>  
      
    )
}

export default DescriptionHostelTwo