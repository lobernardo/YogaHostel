import styles from './HomeOne.module.css'
import 'animate.css'

function HomeOne (){
    return(

    <div className={styles.home__section__one}>

        <div className={styles.txt__home}>
            <h1><span>Trindade</span> sea and forest <span>Yoga Hostel</span></h1>
            <p>Centro holístico</p>
        </div>
       
        <div className={styles.menu__banner}>
            <button><a href=''>Voltar</a></button>
            <button><a href=''>Avançar</a></button>
        </div>
    </div>

    )
}

export default HomeOne