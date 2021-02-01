import React from 'react';
import { shallow } from 'enzyme';
import PetInfo from './pet-info';

describe('<PetInfo />', () => {
  it('Renders without crashing', () => {
    const people = {
      name: 'test',
    };
    shallow(<PetInfo />);
  });
});
