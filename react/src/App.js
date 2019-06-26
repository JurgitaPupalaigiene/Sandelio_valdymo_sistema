import React, { Component } from 'react';
import './App.css';
import { Switch, Redirect, Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import Clients from './components/Clients/Clients';
import SingleClientComponent from './components/Clients/SingleClientComponent';
import ClientAdministrationContainer from './components/ClientAdministration/ClientAdministrationContainer';
import noMatch from './components/Navigation/noMatch';
import HomePage from './components/Navigation/HomePage';
import ClientCardContainer from './components/Clients/ClientCardContainer';
import UpdatingClientContainer from './components/ClientAdministration/UpdatingClientContainer';
import NewClientContainer from './components/ClientAdministration/NewClientContainer'

class App extends Component {
  

  render() {
    return (
     
      <BrowserRouter>
          <HomePage>
              <Switch>
                  <Route exact path='/' component={Clients} />
                  <Route exact path='/clients/:name' component={ClientCardContainer}/>
                  <Route exact path="/clients/:name" component={SingleClientComponent} />
                  <Route exact path='/admin' component={ClientAdministrationContainer} />
                  <Route exact path="/admin/clients/new" component={NewClientContainer} />       
                  <Route exact path="/admin/clients/:name" component={UpdatingClientContainer} />   
                  <Route path="*" component={noMatch} />
                  <Route component={HomePage} />
              </Switch>
          </HomePage>
  </BrowserRouter>
      
    );
  }
}

export default App;
