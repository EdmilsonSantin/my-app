import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import ListaClientes from '../components/listaCliente/listaCliente';
import firebase from '../config/firebase';
import './home.css';

function Home(){
  const [clientes, setClientes] = useState([]);
  const [busca, setBusca] = useState('');
  const [texto, setTexto] = useState('');

  let listaCli = [];

  useEffect(function(){
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
  }, [busca]);
  
  return (
    <div className="container-fluid titulo">
        <Navbar/>
        <div>
          <h1>Cadastro de Clientes</h1>
          <div className="row">
            <div className="col-4">
            <Link to="/app/novocliente" className="btn btn-primary" type="button"><i class="fas fa-plus"></i> Cliente</Link>
            </div>
            <div className="col-8">
            <div className="input-group mb-3">
              <input onChange={(e) => setTexto(e.target.value)} type="text" class="form-control" placeholder="Pesquisar por nome" aria-describedby="button-addon2"/>
              <button onClick={(e) => setBusca(texto)} class="btn btn-primary" type="button" id="button-addon2"><i class="fas fa-search"></i> Pesquisar</button>
            </div>
            </div>
          </div>
          <ListaClientes arrayClientes={clientes} />
        </div>
    </div>
  )   
}

export default Home;