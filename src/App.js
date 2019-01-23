import React, { Component } from 'react';
import Header from './components/Header/Header';
import Gameboard from './components/Gameboard/Gameboard';
import StartScreen from './components/StartScreen/StartScreen';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      start: false,
      end: false
    }
  }

  startGameplay = () => {
    console.log('start')
    this.setState({start: true})
  }

  render() {

    if(this.state.start === false) {
      return (
        <div className='App'>
          <Header />
          <section className='start-screen-wrapper'>
            <StartScreen 
              startGameplay={this.startGameplay}
            />
          </section>
        </div>
      )
    } 
    return (
      <div className='App'>
          <Header />
          <Gameboard />
        }
      </div>
    );
  }
}

export default App;
