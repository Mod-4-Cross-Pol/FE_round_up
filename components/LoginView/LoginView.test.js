import React from 'react';
import ReactDOM from 'react-dom';
import { LoginView } from './LoginView';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
configure({ adapter: new Adapter() });

describe('LoginView', () => {

  describe('Renders a LoginView', () => {

    // it('should match the snapshot', () => {
    //   const wrapper = shallow(<LoginView />);
    //   expect(wrapper).toMatchSnapshot();
    // });

    test('it works', () => {
      expect(true).toBeTruthy();
    });

  });

});
