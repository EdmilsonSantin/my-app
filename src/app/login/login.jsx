import React, {useState, useContext} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {AuthContext} from '../context/auth';
import './login.css';

import firebase from '../config/firebase';
import 'firebase/auth';

function Login(){
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [sucesso, setSucesso] = useState('');
  const {setLogado} = useContext(AuthContext);
  
  function loginUsuario(){
    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(function(firebaseUser){
        localStorage.setItem("logado", "S");
        setLogado(true);
        setSucesso('S');        
      })
      .catch(function(error){
        localStorage.setItem("logado", "N");
        setLogado(false);
        setSucesso('N');
      });
  }

  function alterarEmail(event){
    setEmail(event.target.value);
  }

  function alterarSenha(event){
    setSenha(event.target.value);
  }

  return (
    <div className="d-flex align-items-center text-center form-container">
      <form className="form-signin">
        <img className="mb-4" src="Images/logo-small2.png" alt=""/>
        <h1 className="h3 mb-3 fw-normal">Login</h1>
        <div className="form-floating">
          <input onChange={alterarEmail} type="email" className="form-control" id="floatingInput" placeholder="email"/>
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating">
          <input onChange={alterarSenha} type="password" className="form-control" id="floatingPassword" placeholder="Senha"/>
          <label htmlFor="floatingPassword">Senha</label>
        </div>
        <button onClick={loginUsuario} className="w-100 btn btn-lg btn-primary" type="button">Acessar</button>
        {
          sucesso === 'N' 
            ? <div className="alert alert-danger mt-2" role="alert">Email ou senha inválidos!</div>
            : null
        }
        {
          sucesso === 'S' 
            ? <Redirect to="/app/home"/>
            : null
        }
        <div className="login-links mt-5">
          <Link to="/app/resetsenha" className="mx-3">Esqueci minha senha</Link>
          <Link to="/app/novaconta" className="mx-3">Criar uma conta</Link>
        </div>  
        <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por 99 coders</p>
      </form>        
    </div>
  )   
}

export default Login;