import React , { Component } from 'react';
import './App.css';
import {BrowserRouter , Route , Switch} from 'react-router-dom'

import Home from './components/Home'
import LetterFromPrinciple from './components/LetterFromPrinciple'
import LetterFromSecretariat from './components/LetterFromSecretariat'
import OrganisingCommittee from'./components/OrganisingCommittee'
import Secretariat from'./components/Secretariat'




class App extends Component {
  render()
  {
    return (
      <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/secretariat" exact component={Secretariat}/>
          <Route path="/letterfromprinciple" exact component={LetterFromPrinciple}/>
          <Route path="/letterfromsecretariat" exact component={LetterFromSecretariat}/>
          <Route path="/organisingcommittee" exact component={OrganisingCommittee}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
