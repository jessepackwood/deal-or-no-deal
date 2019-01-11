import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Suitcase from '../../components/Suitcase/Suitcase'

export default class Gameboard extends Component {
  constructor() {
    super();
    this.state = {
      suitcases: [],
      moneySlots: [],
    }
  }

  remainingCasesToDisplay = (this.state.suitcases) => {
    this.state.suitcases.map( (suitcase, index) => {
      return [...suitcase]
    })
  }

  render() {

    const mappedSuitcases = this.state.suitcases.map( (suitcase, index) => {
      return <Suitcase
                value={}
                key={`Case: ${index}`}
              />
    })

    return (
      <div>
      </div>
    )
  }
}