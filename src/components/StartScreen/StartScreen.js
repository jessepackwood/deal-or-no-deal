import React, {Component} from 'react';
import './StartScreen.css';

const StartScreen = ({startGameplay}) => {

  return(
    <div className='start-screen'>
      <button 
        className='btn-start'
        onClick={startGameplay}
      >
      Begin
      </button>
    </div>
  )
}

export default StartScreen;