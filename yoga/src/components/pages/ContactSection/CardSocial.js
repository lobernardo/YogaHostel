import styles from './CardSocial.module.css'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

function CardSocial() {

    return(

        <div className={styles.cardsocial_container}>
            
                <div className={styles.cards_social}>
                    <h4>Redes sociais</h4>
                    <ul>
                        <li><a href='' target= '_blank'><FaInstagram /></a></li>
                    </ul>

                </div>

                <div className={styles.cards_social}>
                    <h4>Email</h4>
                    <ul>
                        <li>seu@email.com.br</li>
                    </ul>

                </div>

                <div className={styles.cards_social_final}>
                    <h4>Telefone</h4>
                    <ul>
                    <li className={styles.wpp_contact}><a href='' target= '_blank'><FaWhatsappSquare /></a>seu telefone</li>
                    </ul>

                </div>


            
        </div>
    )
}


export default CardSocial