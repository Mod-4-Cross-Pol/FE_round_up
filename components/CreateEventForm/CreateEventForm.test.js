import React from 'react';
import { CreateEventForm } from './CreateEventForm';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('CreateEventForm', () => {

  describe('Renders a CreateEventForm component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = Enzyme.shallow(<CreateEventForm />);
  })

  test('renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('verfy testing file works', () => {
    expect(true).toBeTruthy();
  });

  });

});
