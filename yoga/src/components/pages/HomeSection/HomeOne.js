import styles from './HomeOne.module.css'
import 'animate.css'
import logo_teste_home from '../../assets/logo_teste_home.png'


function HomeOne (){
    return(

    <div className={styles.home__section__one}>
        <img className={styles.logo__banner} src={logo_teste_home}/>
      
    </div>

    )
}

export default HomeOne