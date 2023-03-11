import styles from './HomeOne.module.css'
import 'animate.css'
import logo_new3 from '../../assets/logo_new3.png'
import Button from '../../layout/ButtonSection/Button'


function HomeOne (){
    return(

    <div className={styles.home__section__one}>
            <img className={styles.logo_home} src={logo_new3}></img>
            <Button
            title="Contato"
            adress="" />

    </div>

    )
}

export default HomeOne