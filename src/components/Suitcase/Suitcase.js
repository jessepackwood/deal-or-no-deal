import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Suitcase.css';
import NumberFormat from 'react-number-format-presuffix';

const Suitcase = (props) => {
  return (
    <div 
      className = 'suitcase'
      onClick = { () => props.removeSuitcase(props.number) }
    >
      Number = {props.number}
      <div>
        Money = <NumberFormat value={props.money} displayType={'text'} thousandSeparator={true} prefix={'$'} />
      </div>
    </div>
  )
}

export default Suitcase;