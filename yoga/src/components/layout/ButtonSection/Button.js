import styles from './Button.module.css'


function Button(props) {
    return(

        <button className={styles.btn_menu} type="button" name="myButton" autofocus><a href=''>{props.titulo}</a>
        </button>
    )
}

export default Button