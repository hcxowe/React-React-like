import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js'
import Countdown from './Countdown.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Clock></Clock>
          {
            [10000, 9000].map((el) => {
              return <Countdown key={el} total={el}></Countdown>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
