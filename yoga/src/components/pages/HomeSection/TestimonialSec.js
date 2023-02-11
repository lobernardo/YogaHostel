import styles from './TestimonialSec.module.css'


function TestimonialSec(props) {
    return(
    
                <div className={styles.card__testimonials}>
                    <div className={styles.card__unity}>
                        <img src={props.img}/>
                        <h2>{props.nameclient}</h2>
                        <div className={styles.depoiment}>
                        <p>{props.testimonial}</p></div>
                    </div>
                </div>
    )
}

export default TestimonialSec