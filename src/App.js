import React, { Component } from 'react';
import Suitcase from './components/Suitcase/Suitcase';
import Header from './components/Header/Header';
import Gameboard from './components/Gameboard/Gameboard';
import StartScreen from './components/StartScreen/StartScreen';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <StartScreen />
        <Gameboard />

      </div>
    );
  }
}

export default App;
