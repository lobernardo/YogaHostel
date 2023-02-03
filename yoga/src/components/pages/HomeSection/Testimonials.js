import TestimonialSec from './TestimonialSec'
import styles from './Testimonials.module.css'



function Testimonials() {
    return(
      
        <section className={styles.testimonials__container}>

        <h1>O que disseram nossos hóspedes</h1>

        <div className={styles.card__container}>

        <TestimonialSec 
        img='https://cdn-icons-png.flaticon.com/512/5556/5556468.png'
        nameclient='Leo, Rio de janeiro, 33 anos'
        testimonial='"Muito legal, lugar incrível! Perfeito pra desacelerar imerso na natureza. Anfitriões maravilhosos e atividades deliciosas como o nosso yoga de toda manhã; Ja quero  voltar"'
        />
            
        </div>

        </section>

     
    )
}

export default Testimonials