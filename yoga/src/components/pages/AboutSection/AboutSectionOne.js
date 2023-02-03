import styles from './AboutSectionOne.module.css'
import BossCard from './BossCard'
import DescriptionHostel from './DescriptionHostel'


function AboutSectionOne() {
    return(
      
        <section className={styles.aboutsecone__container}>

        <BossCard />
        <DescriptionHostel />
            
        </section>

     
    )
}

export default AboutSectionOne