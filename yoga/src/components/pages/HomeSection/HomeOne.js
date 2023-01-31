import styles from './HomeOne.module.css'
import 'animate.css'
import yhlogo2 from '../../assets/yhlogo2.png'
import Button from '../../layout/ButtonSection/Button'

function HomeOne (){
    return(

    <div className={styles.home__section__one}>
        <img className={styles.logo__banner} src={yhlogo2}/>
        
        <Button />
        
        
    </div>

    )
}

export default HomeOne