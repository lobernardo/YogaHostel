import {Link} from 'react-router-dom'
import logo_yoga from '../../assets/logo_yoga.png'


import styles from './Navbar.module.css'

function Navbar() {
    return(
        

         
                <section className={styles.menu__section} id='menu'>
                  
                <Link to='/'><img className={styles.logo__yoga} src={logo_yoga}/></Link>

                <nav className={styles.navbar}>
                    
                    <ul className={styles.list}>
                      
                        

                          <li className={styles.item}><Link to='/'>Home</Link></li>
                        
                          <li className={styles.item}><Link to='/about'>Sobre</Link></li>
                      
                          <li className={styles.item}><Link to='/dormitorios'>Chalés</Link></li>
                      
                          <li className={styles.item}><Link to='/trindade'>Trindade</Link></li>

                          <li className={styles.item}><Link to='/contact'>Contato</Link></li>
                          
                      

                    </ul>

             </nav>

             </section>

     
    )
}

export default Navbar