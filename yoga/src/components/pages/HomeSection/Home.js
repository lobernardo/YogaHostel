import Button from '../../layout/ButtonSection/Button'
import styles from './Home.module.css'


import HomeOne from './HomeOne'
import HomeTwo from './HomeTwo'
import Localization from './Localization'



function Home() {
    return(   
<section className={styles.home__section} id='home'>

            <HomeOne />
            <Button titulo="contato"/>
            <HomeTwo />
            <Localization />

</section>

    )
}

export default Home