import styles from './Button.module.css'


function Button() {
    return(

        <a href=''><button className={styles.btn} type="button" name="myButton" autofocus>
	    Reservar
        </button></a>
    )
}

export default Button