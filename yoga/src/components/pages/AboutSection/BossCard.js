import styles from  './BossCard.module.css'
import matilde from '../../assets/matilde.png'
import osmar from '../../assets/osmar.png'

import 'animate.css'

function BossCard (){
    return(
        <div className={styles.boss__container}>
            <div className={styles.card__container__about}>
              <img className={styles.card_um} src={osmar}/>
              <img className={styles.card_dois} src={matilde}/>
            </div>

            <div className={styles.about__container__description}>
                <h2 className={styles.osmar}>Osmar</h2>
                <h2 className={styles.matilde}>Matilde</h2>
            </div>
        </div>
    )
}

export default BossCard






