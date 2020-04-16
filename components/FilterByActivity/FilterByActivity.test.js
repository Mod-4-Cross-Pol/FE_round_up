import React from 'react';
import { FilterByActivity } from './FilterByActivity';
import ModalDropdown from 'react-native-modal-dropdown';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('FilterByActivity', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = Enzyme.shallow(<FilterByActivity />);
  })

  test('renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('verfy testing file works', () => {
    expect(true).toBeTruthy();
  });

});
