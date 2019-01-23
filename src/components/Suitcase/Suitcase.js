import React from 'react';
import PropTypes from 'prop-types';
import './Suitcase.css';
import NumberFormat from 'react-number-format-presuffix';

const Suitcase = (props) => {
  return (
    <div 
      className = 'suitcase'
      onClick = { () => props.removeSuitcase(props) }
    >
      <span className='suitcase-number'>{props.number}</span>
    </div>
  )
}

Suitcase.propTypes = {
  removeSuitcase: PropTypes.func
};

export default Suitcase;