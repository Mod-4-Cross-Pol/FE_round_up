import React from 'react';
import { HeaderNav } from './HeaderNav';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('HeaderNav', () => {

  describe('Renders a HeaderNav component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = Enzyme.shallow(<HeaderNav />);
  })

  test('renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('verfy testing file works', () => {
    expect(true).toBeTruthy();
  });

  });

});
