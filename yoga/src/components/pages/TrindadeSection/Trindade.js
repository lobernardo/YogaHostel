import styles from './Trindade.module.css'
import TrindadeBanner from './TrindadeBanner'
import TrindadeHistory from './TrindadeHistory'

import TrindadeBeach from './TrindadeBeach'


function Trindade() {
    return(
      
        <section className={styles.trindade__container}>

        <TrindadeBanner />
        <TrindadeHistory />
        <TrindadeBeach />


            
        </section>

     
    )
}

export default Trindade