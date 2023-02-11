import styles from './Trindade.module.css'
import TrindadeBanner from './TrindadeBanner'
import TrindadeHistory from './TrindadeHistory'
import TrindadePic from './TrindadePic'


function Trindade() {
    return(
      
        <section className={styles.trindade__container}>

        <TrindadeBanner />
        <TrindadeHistory />
        <TrindadePic />
            
        </section>

     
    )
}

export default Trindade