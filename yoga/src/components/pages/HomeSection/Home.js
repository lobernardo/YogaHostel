import Button from '../../layout/ButtonSection/Button'
import styles from './Home.module.css'


import HomeOne from './HomeOne'
import HomeTwo from './HomeTwo'



function Home() {
    return(   
<section className={styles.home__section} id='home'>

            <HomeOne />
            <Button />
            <HomeTwo />

</section>

    )
}

export default Home