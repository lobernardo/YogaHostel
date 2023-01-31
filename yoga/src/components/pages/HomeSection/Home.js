import styles from './Home.module.css'
import 'animate.css'

import logo_apoio from '../../assets/logo_apoio.png'
import yoga1 from '../../assets/yoga1.png'






function Home() {
    return(
    
        
        
<section className={styles.home__section} id='home'>


    <div className={styles.home__section__one}>
        <div className={styles.txt__home}>
        <h1><span>Trindade</span> sea and forest <span>Yoga Hostel</span></h1>
        <p>Centro holístico</p>
        </div>
       
        <div className={styles.menu__banner}>
            <button><a href=''>Voltar</a></button>
            <button><a href=''>Avançar</a></button>
        </div>
    </div>

    <div className={styles.home__section__two}>
    <img className={styles.logo_apoio_home} src={logo_apoio}/>

        <div className={styles.container__home__section__two}>
            <p>Yoga & meditação</p>
            <p>Desde 1999 oferecendo um verdadeiro retiro de paz e calmaria no coração da serra da Bocaína.</p>
            <img className={styles.banner_apoio_home} src={yoga1}/>
        </div>
    </div>


</section>

      
        
        

    )
}

export default Home