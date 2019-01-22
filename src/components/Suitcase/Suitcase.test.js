import React from 'react';
import { shallow, mount } from 'enzyme';
import Suitcase from './Suitcase';

describe('Suitcase', () => {
  it('should exist', () => {
    const suitcase = shallow(<Suitcase />);
    expect(suitcase).toBeDefined();
  })

})