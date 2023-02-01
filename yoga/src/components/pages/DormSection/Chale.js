import styles from './Chale.module.css'
import Button from '../../layout/ButtonSection/Button'


function Chale(props) {
    return(
        <section className={styles.chale__container}>
            
            <img className={styles.img__chale} src={props.image}/>

            <div className={styles.text_chale}>
                <h2>{props.titulo}</h2>
                <p>{props.paragrafo}</p>
                <Button titulo="reservar"/>
            </div>
            
           
            

        </section>
    )
}

export default Chale