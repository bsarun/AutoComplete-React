import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AutoComplete from './Components/AutoComplete.jsx';
import AppDispatcher from '../src/Dispatchers/AppDispatcher';

class App extends Component {
  constructor(props){
    super(props);
      AppDispatcher.register(payload => {
          console.log('AppDispatcher - : ', payload.action.type, payload.action);
      });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <AutoComplete/>
      </div>
    );
  }
}

export default App;
