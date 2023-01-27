import styles from './FormContact.module.css'

import SubmitButton from '../ContactSection/SubmitButton'

function FormContact() {

    return(

        <div className={styles.form__container}>
            

                    <input 
                        className={styles.input_sec}
                        type="text" 
                        name="Seu nome"
                        placeholder="Qual o seu nome?" 
                        required
                    />

                    <input 
                         type="text" 
                         className={styles.input_sec}
                         name="Seu melhor email"
                         placeholder="Digite o seu melhor email" 
                         required
                    />  

                <textarea className={styles.input_sec} name="Textarea" placeholder="Digite aqui a sua mensagem" cols="50" rows="8" minlength="3" maxlength="500" required></textarea>

            <SubmitButton 
            className={styles.btn_ctt}
            text="Enviar"
            />


            
        </div>
    )
}


export default FormContact