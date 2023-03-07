import styles from './HomeOne.module.css'
import 'animate.css'
import logo_teste_home from '../../assets/logo_teste_home.png'
import Button from '../../layout/ButtonSection/Button'


function HomeOne (){
    return(

    <div className={styles.home__section__one}>

            <Button
            title="Contato"
            adress="" />

    </div>

    )
}

export default HomeOne