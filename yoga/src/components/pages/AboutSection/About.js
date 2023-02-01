import styles from './About.module.css'
import AboutBanner from './AboutBanner'
import BossCard from './BossCard'
import DescriptionHostel from './DescriptionHostel'
import DescriptionHostelTwo from './DescriptionHostelTwo'




function About() {
    return(
       

        <section className={styles.about__container}>

            <AboutBanner />
            <BossCard />
            <DescriptionHostel />
            <DescriptionHostelTwo />
            
        </section>

        
    )
}

export default About