import styles from './About.module.css'
import BossCard from './BossCard'
import DescriptionHostel from './DescriptionHostel'




function About() {
    return(
       

        <section className={styles.about__container}>

            <BossCard />
            <DescriptionHostel />
            
        </section>

        
    )
}

export default About