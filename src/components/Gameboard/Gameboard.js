import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Suitcase from '../Suitcase/Suitcase';
import NumberFormat from 'react-number-format-presuffix';
import './Gameboard.css';

const MoneyValues = [.01, 1, 5, 10, 25, 50, 75, 100, 200, 300, 400, 500, 750, 1000, 5000, 10000, 25000, 50000, 75000, 100000, 200000, 300000, 400000, 500000, 750000, 1000000];

export default class Gameboard extends Component {
  constructor() {
    super();
    
    let suitcases = this.buildSuitcases()

    this.state = {
      suitcases: suitcases,
      // moneySlots here in state will be the values you list next to the board. Don't shuffle these
      moneySlots: MoneyValues.slice(),
    }
  }

  /*remainingCasesToDisplay = (this.state.suitcases) => {
    this.state.suitcases.map( (suitcase, index) => {
      return [...suitcase]
    })
  }*/

  componentDidMount() {
  }

  updateSuitcaseNumbers(remainingCases) {
    console.log(remainingCases)
    this.setState({suitcases: remainingCases})
  }

  updateSuitcaseMoney(remainingMoney) {
    this.setState({moneySlots: remainingMoney})
  }

  removeSuitcase = (openedSuitcase) => {
    console.log(openedSuitcase)
    //filter to return every suitcase that does not match the suitcase passed in
    let remainingCases = this.state.suitcases.filter( suitcase => {
      return suitcase.number !== openedSuitcase;
    })
    console.log(remainingCases)
    this.updateSuitcaseNumbers(remainingCases)
  }

  buildSuitcases = () => {
    let builtSuitcases = [];
    // shuffle money values and return new shuffled array
    let shuffledMoney = this.shuffleMoney();

    // for each value in the array returned push a suitcase object onto built cases

    for(let i = 0; i < shuffledMoney.length; i++) {
      builtSuitcases.push({
        number: i + 1,
        money: shuffledMoney[i]
      })
    }
    
    return builtSuitcases
  }

  shuffleMoney() {
    let valueArray = MoneyValues.slice(); //Make a copy to preserve origin of truth
    let currentIndex = valueArray.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = valueArray[currentIndex];
      valueArray[currentIndex] = valueArray[randomIndex];
      valueArray[randomIndex] = temporaryValue;
    }

    return valueArray
  }
  

  render() {
    const mappedSuitcases = this.state.suitcases.map( (suitcase, index) => {
      console.log(suitcase)
      return <Suitcase
                number={suitcase.number}
                key={suitcase.number.toString()}
                money={suitcase.money}
                removeSuitcase={this.removeSuitcase}
              />
    })

    const mappedMoneyValues = this.state.moneySlots.map( (moneyValues, index) => {
      return <div className='money-slot' key={index}>
                <NumberFormat value={moneyValues} displayType={'text'} thousandSeparator={true} prefix={'$'} />
              </div>
    })

    return (
      <div className='game-board'>
        <div className='suitcase-container'>
          {mappedSuitcases}
        </div>
        <div className='money-slot-container'>
          {mappedMoneyValues}
        </div>
      </div>
    )
  }
}

Gameboard.propTypes = {
  value: PropTypes.number,
  money: PropTypes.number,
}