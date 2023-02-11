import styles from './HomeOne.module.css'
import 'animate.css'
import logohome from '../../assets/logohome.png'


function HomeOne (){
    return(

    <div className={styles.home__section__one}>
        <img className={styles.logo__banner} src={logohome}/>
      
    </div>

    )
}

export default HomeOne