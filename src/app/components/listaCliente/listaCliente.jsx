import React, { useState, useEffect }  from 'react';
import './listaCliente.css';
import firebase from '../../config/firebase';

function ListaClientes(){
  const [clientes, setClientes] = useState([]);
  let listaCli = [];

  useEffect(function(){
    firebase.firestore().collection('clientes').get()
      .then(async function(resultado){
        await resultado.docs.forEach(
          function(doc){
            listaCli.push(
              {
                id: doc.id,
                nome: doc.data().nome,
                email: doc.data().email,
                telefone: doc.data().telefone
              }
            )
          }
        )
        setClientes(listaCli);
      })
  }, []);

  return (
    <table className="table table-hover table-bordered">
      <thead className="table-secondary">
        <tr>
        <th scope="col">Código</th>
        <th scope="col">Nome</th>
        <th scope="col">Email</th>
        <th scope="col">Telefone</th>
        </tr>
      </thead>
      <tbody>
        {
          clientes.map((cliente) => {
            return (
              <tr key={cliente.id}>
                <th scope="row">{cliente.id}</th>
                <td>{cliente.nome}</td>
                <td>{cliente.email}</td>
                <td>{cliente.telefone}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
};

export default ListaClientes;