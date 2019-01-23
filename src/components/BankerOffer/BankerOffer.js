import React from 'react';
import NumberFormat from 'react-number-format-presuffix';
import './BankerOffer.css';

const BankerOffer = (props) => {
  console.log(props)
  if (!props.currentOffer) {
    return null;
  } else if (props.winnings) {
    return (
      <div className='winning'>
        Congrats! You made a deal for <NumberFormat value={props.winnings} displayType={'text'} thousandSeparator={true} prefix={'$'} />
      <button className='btn-start-over' onClick={ () => props.startOver()}>
        Play again
      </button>
      </div>
    )
  }
  return (
    <div className='banker-offer'>
      <h3 className='current-offer'>Current Offer  = <NumberFormat value={props.currentOffer} displayType={'text'} thousandSeparator={true} prefix={'$'} />
      </h3>
      <section className='btn-wrapper'>
        <button 
          className='btn-no-deal' 
          onClick={ () => props.declineOffer() } 
        > 
        No deal 
        </button>
        <button 
          className='btn-deal' 
          onClick={ () => props.acceptOffer() }
        > 
        Deal 
        </button>
      </section>
    </div>
  )
}

export default BankerOffer;