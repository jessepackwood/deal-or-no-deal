import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Suitcase.css';

const Suitcase = (props) => {
  return (
    <div className='suitcase'>
      {props.value}
    </div>
  )
}

export default Suitcase;