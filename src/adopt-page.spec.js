import React from 'react';
import { shallow } from 'enzyme';
import AdoptPage from './adopt-page';

describe('<AdoptPage />', () => {
  it('Renders without crashing', () => {
    shallow(<AdoptPage />);
  });
});
