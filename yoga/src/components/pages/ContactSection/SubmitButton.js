import styles from './SubmitButton.module.css'

function SubmitButton({text}) {
    return(
        <div>
            <button className={styles.btn_ctt}>{text}</button>
        </div>
    )
}

export default SubmitButton