import React , { Component } from 'react';
import './App.css';
import {BrowserRouter , Route , Switch} from 'react-router-dom'

import Home from './components/Home'
import LetterFromPrinciple from './components/LetterFromPrinciple'
import LetterFromSecretariat from './components/LetterFromSecretariat'
import OrganisingCommittee from'./components/OrganisingCommittee'
import Secretariat from'./components/Secretariat'
import UNGA from './components/UNGA'
import UNHRC from './components/UNHRC'
import ECOSOC from './components/ECOSOC'
import UNSC from './components/UNSC'




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

          <Route path="/unsc" exact component={UNSC}/>
          <Route path="/ecosoc" exact component={ECOSOC}/>
          <Route path="/unga" exact component={UNGA}/>
          <Route path="/unhrc" exact component={UNHRC}/>



        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
