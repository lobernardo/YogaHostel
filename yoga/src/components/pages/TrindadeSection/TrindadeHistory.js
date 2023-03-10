import styles from './TrindadeHistory.module.css'



function TrindadeHistory() {
    return(
      
        <section className={styles.trindade_history__container}>


            <div className={styles.trindade__container_um}>
                <div className={styles.history__container}>
                    <h2>O paraíso é aqui</h2>
                    <p>Antiga vila de pescadores, Trindade é uma região litorânea charmosa conhecida pelas longas praia arenosas, como a Praia dos Ranchos e a reservada Praia do Cachadaço, que tem uma piscina natural cheia de peixes tropicais coloridos. As trilhas no Parque Nacional da Serra da Bocaina atravessam uma mata atlântica densa até chegar em cachoeiras e piscinas naturais. Os bares e restaurantes casuais têm vista para o mar e servem peixes pescados na região.</p>
                    
                </div>

                <div className={styles.curiosity__container}>
                <h2>magia</h2>
                <p>Lugar cercado de energia boa, curiosidades e muita tranquilidade. É bem normal você dar uma volta e parar em alguma esquina com algum músico dando um verdadeiro show. 
                    Trindade não dorme! O local é acessado através da famosa estrada do "Deus me livre", por ser super estreita e íngrime, por isso, dirija com cuidado e com atenção às placas! Algumas praias e trilhas são acessadas no meio dela.
                </p>
                </div>
            </div>
    
            
        </section>

     
    )
}

export default TrindadeHistory