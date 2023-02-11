import styles from './About.module.css'
import AboutBanner from './AboutBanner'
import AboutSectionOne from './AboutSectionOne'
import DescriptionHostelTwo from './DescriptionHostelTwo'
import Yoga from './Yoga'




function About() {
    return(
       

        <section className={styles.about__container}>

            <AboutBanner />
            <AboutSectionOne />
            <DescriptionHostelTwo />
            <Yoga />
            
        </section>

        
    )
}

export default About