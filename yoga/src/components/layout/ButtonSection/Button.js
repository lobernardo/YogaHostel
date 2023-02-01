import styles from './Button.module.css'


function Button(props) {
    return(

        <button type="button" name="myButton" autofocus><a href=''>{props.titulo}</a>
        </button>
    )
}

export default Button