import React from 'react';
import { DatePicker } from './DatePicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('DatePicker', () => {

  let wrapper;

  beforeEach(() => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setState]);
    wrapper = Enzyme.shallow(<DatePicker />);
  })

  test('renders correctly', () => {
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
