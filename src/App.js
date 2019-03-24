import React, { Component } from 'react';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
      <Header/>
      <Main/>
      </div>
    );
  }
}

export default App;
