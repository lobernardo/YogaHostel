import {Link} from 'react-router-dom'
import logo2 from '../../assets/logo2.png'
import placa from '../../assets/placa.png'


import styles from './Navbar.module.css'
import Button from '../ButtonSection/Button'

function Navbar() {
    return(
        

         
                <section className={styles.menu__section} id='menu'>
                  
                
                <div className={styles.txt__home}>
                <h1><span>Trindade</span> sea and forest <span>Yoga Hostel</span></h1>
              
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

             </section>

     
    )
}

export default Navbar