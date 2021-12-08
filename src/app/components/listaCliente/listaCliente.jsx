import React from 'react';
import './listaCliente.css';
import clientes from '../../dados/clientes';

function ListaClientes(){
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
                <td>{cliente.name}</td>
                <td>{cliente.email}</td>
                <td>{cliente.phone}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
};

export default ListaClientes;