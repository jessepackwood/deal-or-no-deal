import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Suitcase from '../Suitcase/Suitcase';
import NumberFormat from 'react-number-format-presuffix';

const MoneySlot = (props) => {
  return (
    <div
      className = 'money-slot'
    >
      <NumberFormat value={props.money} displayType={'text'} thousandSeparator={true} prefix={'$'} />
    </div>
  )
}

export default MoneySlot;