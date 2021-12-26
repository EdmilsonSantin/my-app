import React, { useContext } from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Site from './site/site.jsx';
import Login from './app/login/login.jsx';
import NovaConta from './app/novaconta/novaconta.jsx';
import ResetSenha from './app/resetsenha/resetsenha.jsx';
import Home from './app/home/home.jsx';
import NovoCliente from './app/novocliente/novocliente.jsx';
import EditarCliente from './app/editarcliente/editarcliente.jsx';
import {AuthContext} from './app/context/auth'; 

function App(){
  const {logado} = useContext(AuthContext);
  
  function SecureRoute ({...params}){
    if (!logado) {
      return <Redirect to='/app'/>
    } else {
      return <Route {...params} />
    }
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Site}/>
        <Route exact path='/app' component={Login}/>
        <Route exact path='/app/novaconta' component={NovaConta}/>
        <Route exact path='/app/resetsenha' component={ResetSenha}/>      
        <SecureRoute exact path='/app/home' component={Home}/>
        <SecureRoute exact path='/app/novocliente' component={NovoCliente}/>
        <SecureRoute exact path='/app/editarcliente/:id' component={EditarCliente}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;