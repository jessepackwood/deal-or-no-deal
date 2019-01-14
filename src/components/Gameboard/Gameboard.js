import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Suitcase from '../../components/Suitcase/Suitcase';

export default class Gameboard extends Component {
  constructor() {
    super();

    let caseValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
    let moneyValues = [.01, 1, 5, 10, 25, 50, 75, 100, 200, 300, 400, 500, 750, 1000, 5000, 10000, 25000, 50000, 75000, 100000, 200000, 300000, 400000, 500000, 750000, 1000000];

    this.state = {
      suitcases: [...caseValues],
      moneySlots: [...moneyValues],
    }
  }

  /*remainingCasesToDisplay = (this.state.suitcases) => {
    this.state.suitcases.map( (suitcase, index) => {
      return [...suitcase]
    })
  }*/

  render() {

    const mappedSuitcases = this.state.suitcases.map( (suitcase, index) => {
      return <Suitcase
                value={suitcase}
                key={`Case: ${index + 1}`}
                money={0}
              />
    })

    return (
      <div>
        {mappedSuitcases}
      </div>
    )
  }
}