import styles from './Localization.module.css'
import ex_map from '../../assets/ex_map.png'

function Localization() {
    return(
    
      <section className={styles.map__container}>
        
        <h1>Veja como chegar</h1>
        <div className={styles.inf__container}>
          <div className={styles.inf_un__container_a}>
            <h3>Localização:</h3>
            <p>Estamos localizados em Trindade. A Vila de Trindade está localizada no Litoral Sul Fluminense, no município de Paraty, estado do Rio de Janeiro. Fica próximo a divisa com Ubatuba, Estado de São Paulo. </p>
          </div>
          <div className={styles.inf_un__container}>
          <h3>Como chegar:</h3>
          <p>A melhor forma de chegar em Trindade é indo até Paraty. Lá existem opções de ônibus saindo de hora em hora, e também é possível negociar valor com alguns motoristas que ficam na rodoviária</p>
            <h4>De carro:</h4>
            <p>Para quem vai até Paraty siga pela rodovia Rio-Santos em direção a Ubatuba SP e no Bairro do Patrimônio (Município de Paraty) entre por uma estrada asfaltada, suba uma pequena serra e no topo existe uma bifurcação, siga em frente desça a serra até chegar na vila.</p>
            <h4>De ônibus:</h4>
            <p>Independente de onde sair, direcione sua ida para Paraty. Se atente aos horários de saidas dos ônibus até a vila.</p>
          </div>
        </div>

        <div className={styles.map__section}>
        <h1>IMAGEM DO MAPS/MAP SECTION</h1>
        </div>

      </section>

    )
}


export default Localization