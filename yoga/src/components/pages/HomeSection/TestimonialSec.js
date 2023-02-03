import styles from './TestimonialSec.module.css'


function TestimonialSec(props) {
    return(
    
                <div className={styles.card__testimonials}>
                    <div className={styles.card__unity}>
                        <img src={props.img}/>
                        <h2>{props.nameclient}</h2>
                        <p className={styles.depoiment}>{props.testimonial}</p>
                    </div>
                </div>
    )
}

export default TestimonialSec