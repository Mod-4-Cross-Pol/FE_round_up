import React from 'react';
import { LoginView } from './LoginView';
import renderer from 'react-test-renderer';

describe('LoginView', () => {

  describe('Renders a LoginView component', () => {

    test('renders correctly', () => {
      const wrapper = renderer.create(<LoginView />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });

  });

});
