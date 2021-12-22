import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import ListaClientes from '../components/listaCliente/listaCliente';
import firebase from '../config/firebase';
import 'firebase/firestore';
import './home.css';
import SweetAlert from 'react-bootstrap-sweetalert';

function Home(){
  const [clientes, setClientes] = useState([]);
  const [busca, setBusca] = useState('');
  const [excluido, setExcluido] = useState('');
  const [texto, setTexto] = useState('');
  const [confirmacao, setConfirmacao] = useState(false);
  const [confirmacaoId, setConfirmacaoId] = useState('');
  
  function deleteUser(id){
    firebase.firestore().collection('clientes').doc(id).delete()
      .then(() => {
        setExcluido(id);
        setConfirmacao(false);
      });
  }

  function confirmDeleteUser(id){
    setConfirmacao(true);
    setConfirmacaoId(id);
  }

  useEffect(function(){
    let listaCli = [];
    firebase.firestore().collection('clientes').get()
      .then(async function(resultado){
        await resultado.docs.forEach(
          function(doc){
            if (doc.data().nome.indexOf(busca) >= 0) {
              listaCli.push(
                {
                  id: doc.id,
                  nome: doc.data().nome,
                  email: doc.data().email,
                  telefone: doc.data().telefone
                }
              )
            }
          }
        )
        setClientes(listaCli);
      })
  }, [busca, excluido]);
  
  return (
    <div className="container-fluid titulo">
        <Navbar/>
        <div>
          <h1>Cadastro de Clientes</h1>
          <div className="row">
            <div className="col-4">
            <Link to="/app/novocliente" className="btn btn-primary" type="button"><i className="fas fa-plus"></i> Cliente</Link>
            </div>
            <div className="col-8">
            <div className="input-group mb-3">
              <input onChange={(e) => setTexto(e.target.value)} type="text" className="form-control" placeholder="Pesquisar por nome" aria-describedby="button-addon2"/>
              <button onClick={(e) => setBusca(texto)} className="btn btn-primary" type="button" id="button-addon2"><i className="fas fa-search"></i> Pesquisar</button>
            </div>
            </div>
          </div>
          <ListaClientes arrayClientes={clientes} clickDelete={confirmDeleteUser}/>

          {confirmacao ?
            <SweetAlert
              warning
              showCancel
              showCloseButton
              confirmBtnText="Sim"            
              confirmBtnBsStyle="danger"
              cancelBtnText="Não"
              cancelBtnBsStyle="light"
              title="Exclusão"
              onConfirm={() => {deleteUser(confirmacaoId)}}
              onCancel={() => {setConfirmacao(false)}}
              reverseButtons={true}
            >
              Deseja excluir o cliente selecionado?
            </SweetAlert> :null
          }
        </div>
    </div>
  )   
}

export default Home;