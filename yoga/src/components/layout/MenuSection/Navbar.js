import {Link} from 'react-router-dom'
import ButtonMobile from '../../layout/MenuMobile/ButtonMobile'

import logohome from '../../assets/logohome.png'
import logo_apoio from '../../assets/logo_apoio.png'




import styles from './Navbar.module.css'


function Navbar() {
    return(
        

         
                <section className={styles.menu__section} id='menu'>
                  
                
                <div className={styles.txt__home}>
                <h1><span>Yoga</span> life <span>centro holístico</span></h1>

               
                
              
                </div>
                

                <nav className={styles.navbar}>
                    
                    <ul className={styles.list}>
                      
                        

                          <li className={styles.item}><Link to='/'>Home</Link></li>
                        
                          <li className={styles.item}><Link to='/about'>Sobre</Link></li>
                      
                          <li className={styles.item}><Link to='/dormitorios'>Chalés</Link></li>

                          <li className={styles.item}><Link to='/atividades'>Nossas atividades</Link></li>
                      
                          <li className={styles.item}><Link to='/trindade'>Trindade</Link></li>

                          <li className={styles.item}><Link to='/contact'>Contato</Link></li>

                          <li className={styles.btn_navbar}><a>Reservar</a></li>


                    </ul>

             </nav>

        
                    <div className={styles.section__mobile__logo_menu}> 
                    <img className={styles.logo__mob} src={logo_apoio}></img>
                    <ButtonMobile /></div>
            
             
             


             </section>

     
    )
}

export default Navbar