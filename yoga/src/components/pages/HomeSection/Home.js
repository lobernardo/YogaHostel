import Button from '../../layout/ButtonSection/Button'
import Testimonials from './Testimonials'
import styles from './Home.module.css'


import HomeOne from './HomeOne'
import HomeTwo from './HomeTwo'
import Localization from './Localization'



function Home() {
    return(   
<section className={styles.home__section} id='home'>

            <HomeOne />
            <HomeTwo />
            <Testimonials />
            <Localization />

</section>

    )
}

export default Home