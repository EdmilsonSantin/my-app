import React, { useState, useEffect } from 'react';
import {Redirect, Link} from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import './editarcliente.css';
import firebase from '../config/firebase';
import 'firebase/firestore'

function EditarCliente(props){
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState('');
  const db = firebase.firestore();

  useEffect(() => {
    firebase.firestore().collection('clientes')
      .doc(props.match.params.id).get()
      .then((resultado) => {
        setNome(resultado.data().nome);
        setEmail(resultado.data().email);
        setTelefone(resultado.data().telefone);  
      })
      .catch((erro) => {

      })
    }, [props.match.params.id])

  function AlterarCliente(){
    if (nome.length === 0) {
      setMensagem('Informe o nome')
    } else if (email.length === 0) {
      setMensagem('Informe o email')
    } else {
      db.collection('clientes').doc(props.match.params.id).update({
        nome: nome,
        email: email,
        telefone: telefone
      })
      .then(() => {
        setMensagem('');
        setSucesso('S');
      })
      .catch((erro) => {
        setMensagem(erro);
        setSucesso('N');
      });
    }
  }

  return (
    <div>
      <Navbar/>
      <div className="container-fluid titulo">
        <div className="offset-lg-3 col-lg-6">
          <h1>Editar Cliente</h1>
          <form>
          <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Código</label>
              <input type="text" value={props.match.params.id} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" disabled/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Nome</label>
              <input onChange={(e) => setNome(e.target.value)} type="text" value={nome} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
              <input onChange={(e) => setEmail(e.target.value)} type="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Telefone</label>
              <input onChange={(e) => setTelefone(e.target.value)} type="text" value={telefone} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="text-center">
              <Link to="/app/home" className="btn btn-outline-primary btn-acao">Cancelar</Link>
              <button type="button" onClick={AlterarCliente} className="btn btn-primary btn-acao">Salvar</button>    
            </div>   

            {
              mensagem.length > 0 
                ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div>
                : null
            }
            {
              sucesso === 'S' 
                ? <Redirect to='/app/home'/>
                : null
            }                 
          </form>
        </div>
      </div>
    </div>
  );  
}

export default EditarCliente;