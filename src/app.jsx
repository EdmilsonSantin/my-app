import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Site from './site/site.jsx';
import Login from './app/login/login.jsx';
import NovaConta from './app/novaconta/novaconta.jsx';
import ResetSenha from './app/resetsenha/resetsenha.jsx';
import Home from './app/home/home.jsx';
import NovoCliente from './app/novocliente/novocliente.jsx';

function App(){
  return (
    <BrowserRouter>
      <Route exact path='/' component={Site}/>
      <Route exact path='/app' component={Login}/>
      <Route exact path='/app/novaconta' component={NovaConta}/>
      <Route exact path='/app/resetsenha' component={ResetSenha}/>
      <Route exact path='/app/home' component={Home}/>
      <Route exact path='/app/novocliente' component={NovoCliente}/>
    </BrowserRouter>
  )
}

export default App;