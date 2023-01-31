import styles from './About.module.css'
import BossCard from './BossCard'
import DescriptionHostel from './DescriptionHostel'
import DescriptionHostelTwo from './DescriptionHostelTwo'




function About() {
    return(
       

        <section className={styles.about__container}>

            <div className={styles.desc__one__container}> 
            <BossCard />
            <DescriptionHostel />
            </div>

            <div className={styles.desc__two__container}>
            <DescriptionHostelTwo />
            </div>
            
        </section>

        
    )
}

export default About