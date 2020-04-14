import React from 'react';
import { ShortEventCard } from './ShortEventCard';
import renderer from 'react-test-renderer';

describe('ShortEventCard', () => {

  describe('Renders a ShortEventCard component', () => {

    test('renders correctly', () => {
      const wrapper = renderer.create(<ShortEventCard />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    test('it works', () => {
      expect(true).toBeTruthy();
    });

  });

});
