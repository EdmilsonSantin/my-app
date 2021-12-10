import React  from 'react';
import { Link } from 'react-router-dom';
import './listaCliente.css';

function ListaClientes(props){
  function deleteUser(id){
    alert('Excluir usuário ' + id);
  }
  
  return (
    <table className="table table-hover table-bordered">
      <thead className="table-secondary">
        <tr>
        <th scope="col">Código</th>
        <th scope="col">Nome</th>
        <th scope="col">Email</th>
        <th scope="col">Telefone</th>
        <th scope="col" className="col-acao"></th>
        </tr>
      </thead>
      <tbody>
        {
          props.arrayClientes.map((cliente) => {
            return (
              <tr key={cliente.id}>
                <th scope="row">{cliente.id}</th>
                <td>{cliente.nome}</td>
                <td>{cliente.email}</td>
                <td>{cliente.telefone}</td>
                <td>
                  <Link to="#"><i className="fas fa-edit icone-acao"></i></Link>
                  <Link to="#" onClick={() => deleteUser(cliente.id)}><i className="far fa-trash-alt icone-acao red"></i></Link>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
};

export default ListaClientes;