import styles from './MenuMobile.module.css'
import {Link} from 'react-router-dom'



function MenuMobile() {
    return(

        <section className={styles.mobile_menu_section}>
   
                <nav className={styles.mobile_menu}>
                            
                    <ul className={styles.nav_mobile}>
                    
                        <li className={styles.item_mobile}><Link to='/'>Home</Link></li>
                        
                        <li className={styles.item_mobile}><Link to='/about'>Sobre</Link></li>
                    
                        <li className={styles.item_mobile}><Link to='/dormitorios'>Chalés</Link></li>

                        <li className={styles.item_mobile}><Link to='/atividades'>Nossas atividades</Link></li>
                    
                        <li className={styles.item_mobile}><Link to='/trindade'>Trindade</Link></li>

                        <li className={styles.item_mobile}><Link to='/contact'>Contato</Link></li>

                    </ul>
                </nav>

        </section>

      )
}

export default MenuMobile