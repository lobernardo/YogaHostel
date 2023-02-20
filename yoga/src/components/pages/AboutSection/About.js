import styles from './About.module.css'
import AboutBanner from './AboutBanner'
import AboutSectionOne from './AboutSectionOne'
import DescriptionHostelTwo from './DescriptionHostelTwo'





function About() {
    return(
       

        <section className={styles.about__container}>

            <AboutBanner />
            <AboutSectionOne />
            <DescriptionHostelTwo />
         
            
        </section>

        
    )
}

export default About