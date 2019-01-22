import React, {Component} from 'react';


const StartScreen = ({startGameplay}) => {

  return(
    <div className='start-screen'>
      <h3>Start Screen </h3>
      <button 
        onClick={startGameplay}
      >
      Begin
      </button>
    </div>
  )
}

export default StartScreen;