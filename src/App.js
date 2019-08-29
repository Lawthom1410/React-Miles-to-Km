import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { ParentComp } from './ParentComp';

class App extends Component {
  render(){
    return (
      <div className="App">
        <ParentComp />
      </div>
    );
  }
}

export default App;
