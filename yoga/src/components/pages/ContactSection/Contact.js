import styles from './Contact.module.css'
import ContactBanner from './ContactBanner'
import FormContact from './FormContact'



function Contact() {
    return(

        <section className={styles.contact__container}>   

        <ContactBanner />
            
        <FormContact />
        


        </section>
    )
}


export default Contact