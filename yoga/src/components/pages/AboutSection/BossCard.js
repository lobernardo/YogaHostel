import styles from  './BossCard.module.css'
import woman_ia from '../../assets/woman_ia.png'
import men_ia from '../../assets/men_ia.png'

import 'animate.css'

function BossCard (){
    return(
        <div className={styles.boss__container}>


            <div className={styles.boss__geral}>
                
                    <div className={styles.card__container__about}>
                    <img className={styles.card_um} src={men_ia}/>
                    <img className={styles.card_dois} src={woman_ia}/>
                    </div>

                    <div className={styles.about__container__description}>
                        <h2 className={styles.osmar}>Carlos Santos</h2>
                        <h2 className={styles.matilde}>Rosana Soares</h2>
                    </div>

            </div>


        </div>
    )
}

export default BossCard






