import React, {Component} from 'react';
import './App.css';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';
import {Route, Switch, NavLink} from 'react-router-dom';
import NavBar from './NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        {/* <nav className="App-nav">
          <NavLink exact activeClassName= "active-link" to="/">Vending Machine</NavLink>{" "}
          <NavLink exact activeClassName= "active-link" to='/soda'>Soda</NavLink>{" "}
          <NavLink exact activeClassName= "active-link" to='/chips'>Chips</NavLink>{" "}
          <NavLink exact activeClassName= "active-link" to='/sardines'>Sardines!</NavLink>
        </nav> */}
        <NavBar />
        <Switch>
          {/* <Route exact path='/' component={VendingMachine}/>
          <Route exact path='/soda' component={Soda} />
          <Route exact path='/chips' component={Chips} />
          <Route exact path='/sardines' component={Sardines} /> */}

          <Route exact path='/' render={() => <VendingMachine />} />
          <Route exact path='/soda' render={() => <Soda />} />
          <Route exact path='/sardines' render={() => <Sardines />} />
          <Route exact path='/chips' render={() => <Chips />} />
        </Switch>
      </div>
    );
  }
}

export default App;
