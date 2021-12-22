import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './resetsenha.css';

import firebase from '../config/firebase';
import 'firebase/auth';

function ResetSenha(){
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState('');

  function RecuperarSenha(){
    firebase.auth().sendPasswordResetEmail(email)
      .then(resultado => {
        setMensagem('');
        setSucesso('Email enviado com sucesso');
      })
      .catch(error => {
        setMensagem('Erro ao recuperar senha: ' + error.message);
        setSucesso('');
      }); 
  }

  return (
    <div className="d-flex align-items-center text-center form-container">
      <form className="form-signin">
        <img className="mb-4" src="/Images/logo-small2.png" alt=""/>
        <h1 className="h3 mb-3 fw-normal">Recuperar Senha</h1>
        <div className="form-floating">
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="email"/>
          <label htmlFor="floatingInput">Email</label>
        </div>
        <button onClick={RecuperarSenha} className="w-100 btn btn-lg btn-primary mt-3" type="button">Enviar</button>
        {
          mensagem.length > 0 
            ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div>
            : null
        }
        {
          sucesso.length > 0 
            ? <div className="alert alert-success mt-2" role="alert">{sucesso}</div>
            : null
        }
        <div className="login-links mt-5">
          <Link to="/app/novaconta" className="mx-3">Criar uma conta</Link>
        </div>  
        
        <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por 99 coders</p>
      </form>        
    </div>
  )   
}

export default ResetSenha;