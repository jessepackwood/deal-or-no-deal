import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Suitcase.css';

const Suitcase = (props) => {
  return (
    <div className='suitcase'>
      Number = {props.number}
      <div>
        Money = {props.money}
      </div>
    </div>
  )
}

export default Suitcase;