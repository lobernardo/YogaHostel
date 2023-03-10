import styles from './TrindadeBeach.module.css'
import PhotoGrid from './PhotoGrid'



function TrindadeBeach() {
    return(
      
        <section className={styles.trindade_beach_container}>

            <h2>As praias incríveis da vila...</h2>

            <div className={styles.trindade_beach}>
                
                <p>O lugar é cercado de praias incríveis por um lado e com algumas cachoeiras rodeando a vila.
                As principais e mais conhecidas começam logo que sai da Deus me livre, quando chegamos na praia mais famosa entre os surfistas e conhecida por ondas perfeitas. Essa praia é o CEPILHO.
                Logo a frente, e colada no Cepilho chegamos na ...</p>
                
            </div>

            <PhotoGrid />
       

            
        </section>

     
    )
}

export default TrindadeBeach