import Button from '../../layout/ButtonSection/Button';
import styles from './FormContact.module.css'

import React, { useState } from 'react';



function FormContact(props) {
  // Use o hook useState para gerenciar o estado dos inputs do formulário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, message);
    // aqui você pode enviar os dados para o servidor, limpar o formulário, etc.
  };

  return (

    <div className={styles.formcontact__container}>

    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Nome:
        <input className={styles.input} type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label className={styles.label}>
        Email:
        <input className={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label className={styles.label}>
        Mensagem:
        <textarea className={styles.txtarea} value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <br />
      
      <div className={styles.btn_menu}>
      <Button
      titulo="Enviar" /></div>
     
    </form>
    </div>
  );
}

export default FormContact;