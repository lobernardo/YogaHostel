import styles from './Dorm.module.css'
import DormBanner from './DormBanner'
import Chale from './Chale'
import chale2 from '../../assets/chale2.png'
import Button from '../../layout/ButtonSection/Button'


function Dormitory() {
    return(
        <section className={styles.dorm__container}>

            <DormBanner />

            <div className={styles.txt__dorm__container}>
            <h3>Os chalés</h3>
            <p>Nossos chalés foram criados todos com madeiras recicladas e coletadas durante 15 anos.
            <br></br>Feitos com carinho e muito amor</p></div>

            <Chale 
            image={chale2}
            titulo="Chalé Beija-flor"
            paragrafo="Nosso chalé beija flor conta com blablablablablablablablablablablablablablablablablablablablablablablablablablabla"
            />

            <Chale 
            titulo="Chalé Tucano"
            paragrafo="Nosso chalé beija flor conta com blablablablablablablablablablablablablablablablablablablablablablablablablablabla"
            image={chale2}
            />

            <Chale 
            image={chale2}
            titulo="Chalé Bicho-preguiça"
            paragrafo="Nosso chalé beija flor conta com blablablablablablablablablablablablablablablablablablablablablablablablablablabla"
            />

            
        </section>
    )
}

export default Dormitory