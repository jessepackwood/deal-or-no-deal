import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Suitcase from '../Suitcase/Suitcase';
import MoneySlot from '../MoneySlot/MoneySlot';
import BankerOffer from '../BankerOffer/BankerOffer';
import './Gameboard.css';

const MoneyValues = [.01, 1, 5, 10, 25, 50, 75, 100, 200, 300, 400, 500, 750, 1000, 5000, 10000, 25000, 50000, 75000, 100000, 200000, 300000, 400000, 500000, 750000, 1000000];

export default class Gameboard extends Component {
  constructor() {
    super();
    
    let suitcases = this.buildSuitcases();

    this.state = {
      suitcases: suitcases,
      // moneySlots here in state will be the values you list next to the board. Don't shuffle these
      moneySlots: MoneyValues.slice(),
      userSuitcase: [],
      removedSlots: []
    }
  };

  addUserSuitcase = (userSuitcase) => {
    console.log(userSuitcase)
    this.setState({userSuitcase: [userSuitcase]});
  };

  updateSuitcaseNumbers(remainingCases) {
    this.setState({suitcases: remainingCases});
  };

  updateMoneySlots(removedSlot) {
    if(!!this.state.userSuitcase.length) {
      this.state.removedSlots.push(removedSlot[0]);
    }
  }

  removeSuitcase = (openedSuitcase) => {
    //filter to return every suitcase that does not match the suitcase passed in
      this.checkAllSuitcases();

      let remainingCases = this.filterSuitcases(openedSuitcase);
      let removedSlot = this.state.moneySlots.filter( moneySlot => {
        return moneySlot === openedSuitcase.money;
      })

      this.updateSuitcaseNumbers(remainingCases);
      this.updateMoneySlots(removedSlot);
  }

  filterSuitcases = (pickedSuitcase) => {
    let gameCases = this.state.suitcases.filter( suitcase => {
      return suitcase.number !== pickedSuitcase.number;
    })
    return gameCases;
  };

  checkUserSuitcase = (pickedSuitcase) => {
    if(this.state.suitcases.length === 26) {
      this.addUserSuitcase(pickedSuitcase);
      this.setState({suitcases: [this.filterSuitcases(pickedSuitcase)]}); 
      }
    this.removeSuitcase(pickedSuitcase);
  };

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
    };
    
    return builtSuitcases;
  };

  shuffleMoney = () => {
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
  };

  generateBankerOffer = (caseValues) => {
    let offer = (array) => array.reduce((a, b) => a + b) / array.length;
    console.log(Math.round(offer(caseValues)));
  }

  checkAllSuitcases = () => {
    let cases = this.state.suitcases.length;
    console.log(cases)
    if(cases === 19 || cases === 15 || cases === 11 || cases === 8 || cases === 6 || cases === 5 || cases === 4 || cases === 3 || cases === 2) {
      
      let caseValues = [];

      this.state.suitcases.forEach( suitcase => caseValues.push(suitcase.money));
      this.generateBankerOffer(caseValues)
    } else {
      return true;
    }
  }
  

  render() {
    const mappedSuitcases = this.state.suitcases.map( (suitcase, index) => {
      return <Suitcase
                number={suitcase.number}
                key={suitcase.number.toString()}
                money={suitcase.money}
                removeSuitcase={this.checkUserSuitcase}
              />
    })

    const mappedMoneyValues = this.state.moneySlots.map( (moneyValues, index) => {
      if(!this.state.removedSlots.includes(moneyValues)) {
          return <MoneySlot
                    className='money-slot'
                    key={index} 
                    money={moneyValues} 
                  />
      } else {
        return <MoneySlot
                  className='inactive'
                  key={index}
                  money={moneyValues}
                />
        }
    })

    const userSuitcase = this.state.userSuitcase.map( (suitcase, index) => {
      return <Suitcase
                number={suitcase.number}
                key={index}
                money={suitcase.money}
              />
    })

    return (
      <div className='game-board'>
        <div className='suitcase-container'>
          {mappedSuitcases}
        </div>
        <div className='money-slot-container'>
          {mappedMoneyValues}
        </div>
        <div className='user-suitcase-container'>
          <h3>Your case</h3>
            {userSuitcase}
        </div>
      </div>
    )
  }
}

Gameboard.propTypes = {
  value: PropTypes.number,
  money: PropTypes.number,
}