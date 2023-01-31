import styles from './HomeTwo.module.css'
import logo_apoio from '../../assets/logo_apoio.png'
import yoga1 from '../../assets/yoga1.png'

function HomeTwo (){
    return(

<div className={styles.home__section__two}>
    <img className={styles.logo_apoio_home} src={logo_apoio}/>

        <div className={styles.container__home__section__two}>
            <p>Yoga & meditação</p>
            <p>Desde 1999 oferecendo um verdadeiro retiro de paz e calmaria no coração da serra da Bocaína.</p>
            <img className={styles.banner_apoio_home} src={yoga1}/>
        </div>
    </div>

    )
}


export default HomeTwo
