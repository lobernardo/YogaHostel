import Button from '../../layout/ButtonSection/Button'
import Client from './Client'
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
            <Client />
            <Localization />

</section>

    )
}

export default Home