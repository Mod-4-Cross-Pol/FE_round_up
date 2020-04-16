import React from 'react';
import { FullEventCard } from './FullEventCard';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('FullEventCard', () => {

  describe('Renders a FullEventCard component', () => {

  let wrapper;

  beforeEach(() => {
    const mockProps = {
      route: {
        params: {
          event: {
            activity: 'Basketball',
            attending: false,
            current_participant_count: 1,
            date: '2020-04-15',
            description: '',
            duration: '45 min',
            equipment: 'fds',
            id: 51,
            lat_long: '37.064236,-95.6431662',
            location: 'Park',
            max_participant_count: 2,
            skill_level: 'Just for fun!',
            start_time: '6:00AM',
          }
        }
      }
    }
      wrapper = Enzyme.shallow(<FullEventCard {...mockProps}/>);
    })

    test('renders the component', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('verfy testing file works', () => {
      expect(true).toBeTruthy();
    });

  });

});
