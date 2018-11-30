import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store'

import AppNavBar from './components/layout/AppNavBar';
import Dashboard from './components/layout/Dashboard';
import AddClient from './components/clients/AddClient';
import EditClient from './components/clients/EditClient';
import ClientDetails from './components/clients/ClientDetails';
import Login from './components/auth/Login';


class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
          <div className="App">
            <AppNavBar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={ Dashboard }></Route>
                <Route exact path='/client/add' component={ AddClient }></Route>
                <Route exact path='/client/edit/:id' component={ EditClient }></Route>
                <Route exact path='/client/:id' component={ ClientDetails }></Route>
                <Route exact path='/login' component={ Login }></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
