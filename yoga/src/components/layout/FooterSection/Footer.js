import { FaInstagram } from "react-icons/fa";

import styles from './Footer.module.css'




function Footer(){
        return(
         

          <footer className={styles.footer__section}>

              <ul className={styles.social_list}>
                <li><a href='https://www.instagram.com/trindadeyogahostel/' target= '_blank'><FaInstagram /></a></li>
              </ul>
                <p className={styles.copy}><span>E-mail:</span><a>emaildohostel@gmail.com</a></p>
                <p className={styles.copy}>
                  <span>Trindade Yoga Hostel</span>  &copy;  desde 1999</p>
          </footer>

       
        )
    }

export default Footer