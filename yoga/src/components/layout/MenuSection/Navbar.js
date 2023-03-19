import {Link} from 'react-router-dom'
import ButtonMobile from '../../layout/MenuMobile/ButtonMobile'
import Button from '../ButtonSection/Button'

import logo_apoio from '../../assets/logo_apoio.png'




import styles from './Navbar.module.css'


function Navbar() {
    return(
        

         
                <section className={styles.menu__section} id='menu'>
                  
                
                <div className={styles.txt__home}>
                </div>
                

                <nav className={styles.navbar}>

                    <div className={styles.txt_logo}>
                        <h2>Yoga Hostel</h2>
                        <p>Centro holístico</p>
                    </div>
                    
                    <ul className={styles.list}>
                      
                          <li className={styles.item}><Link to='/'>Home</Link></li>
                        
                          <li className={styles.item}><Link to='/about'>Sobre</Link></li>
                      
                          <li className={styles.item}><Link to='/dormitorios'>Chalés</Link></li>
                      
                          <li className={styles.item}><Link to='/trindade'>Trindade</Link></li>

                          <li className={styles.item}><Link to='/contact'>Contato</Link></li>

                          <Button
                          title="Reservar"
                          adress="" />


                    </ul>

             </nav>

        
                    <div className={styles.section__mobile__logo_menu}> 
                    <img className={styles.logo__mob} src={logo_apoio}></img>
                    <ButtonMobile /></div>
            
             
             


             </section>

     
    )
}

export default Navbar