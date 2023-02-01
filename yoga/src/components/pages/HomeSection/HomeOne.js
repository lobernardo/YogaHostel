import styles from './HomeOne.module.css'
import 'animate.css'
import logoohm from '../../assets/logoohm.png'


function HomeOne (){
    return(

    <div className={styles.home__section__one}>
        <img className={styles.logo__banner} src={logoohm}/>
      
    </div>

    )
}

export default HomeOne