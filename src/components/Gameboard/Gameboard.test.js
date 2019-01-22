import React from 'react';
import { shallow, mount } from 'enzyme';
import Gameboard from './Gameboard';

describe('Gameboard', () => {

  const mockMoneySlots = [.01, 1, 5, 10, 25, 50, 75, 100, 200, 300, 400, 500, 750, 1000, 5000, 10000, 25000, 50000, 75000, 100000, 200000, 300000, 400000, 500000, 750000, 1000000];
  const mockSuitcases = [{number: 1}, {number: 2}, {number: 3}];

  it('should exist', () => {
    const gameboard = shallow(<Gameboard />);
    expect(gameboard).toBeDefined();
  })

  it('should have a default state', () => {
    const gameboard = shallow(<Gameboard />);
    const expectedDefault = {
      suitcases: [],
      moneySlots: mockMoneySlots, 
      userSuitcase: [],
      bankerOffer: null,
      removedSlots: []
    };
    expect(gameboard.state()).toEqual(expectedDefault);
  });

})