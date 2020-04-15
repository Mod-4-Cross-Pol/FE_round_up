import React from 'react';
import { DatePicker } from './DatePicker';
// import DateTimePicker from '@react-native-community/datetimepicker';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('DatePicker', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = Enzyme.shallow(<DatePicker />);
  })

  test('verfy testing file works', () => {
    expect(true).toBeTruthy();
  });

  test('verfy testing file works', () => {
    expect(wrapper).toMatchSnapshot();
  });

});






// import React from 'react';
// import { DatePicker } from './DatePicker';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import renderer from 'react-test-renderer';
//
// describe('DatePicker', () => {
//
//   describe('Renders a DatePicker component', () => {
//
//     test('renders correctly', () => {
//       const wrapper = renderer.create(<DatePicker />).toJSON();
//       expect(wrapper).toMatchSnapshot();
//     });
//
//
//   });
//
// });
