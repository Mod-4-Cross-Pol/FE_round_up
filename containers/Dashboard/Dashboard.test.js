import React from 'react';
import { Dashboard } from './Dashboard';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Dashboard', () => {

  describe('Renders a Dashboard component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = Enzyme.shallow(<Dashboard />);
  })

    test('renders the component', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('verfy testing file works', () => {
      expect(true).toBeTruthy();
    });

  });

});
