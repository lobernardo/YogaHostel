import styles from './HomeTwo.module.css'
import logo_apoio from '../../assets/logo_apoio.png'

import 'animate.css'
import ImageCarousel from './ImageCarousel'
import CarouselHome from './CarouselHome'

function HomeTwo (){
    return(

<div className={styles.home__section__two}>
    <img className={styles.logo_apoio_home} src={logo_apoio}/>

        <div className={styles.container__home__section__two}>
            <h2>Yoga & meditação</h2>
            <p>Desde 1999 oferecendo um verdadeiro retiro de paz e calmaria no coração da serra da Bocaína. <br></br> Aqui voce vai encontrar o lugar ideal pra repor suas energias, se conectar com a natureza e viver ótimas experiências de auto conhecimento.</p>


            <CarouselHome />
         
        </div>
    </div>

    )
}


export default HomeTwo
