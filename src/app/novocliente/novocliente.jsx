import React from 'react';
import Navbar from '../components/navbar/navbar';
import './novocliente.css';

function NovoCliente(){
  return (
    <div>
      <Navbar/>
      <div className="container-fluid titulo">
        <div className="offset-lg-3 col-lg-6">
          <h1>Novo Cliente</h1>
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">Nome</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">Telefone</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="text-center">
              <button type="submit" class="btn btn-outline-primary btn-acao">Cancelar</button>
              <button type="submit" class="btn btn-primary btn-acao">Salvar</button>    
            </div>                    
          </form>
        </div>
      </div>
    </div>
  );  
}

export default NovoCliente;