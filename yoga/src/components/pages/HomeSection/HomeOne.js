import styles from './HomeOne.module.css'
import 'animate.css'
import logo_new from '../../assets/logo_new.png'
import Button from '../../layout/ButtonSection/Button'


function HomeOne (){
    return(

    <div className={styles.home__section__one}>
            <img src={logo_new}></img>
            <Button
            title="Contato"
            adress="" />

    </div>

    )
}

export default HomeOne