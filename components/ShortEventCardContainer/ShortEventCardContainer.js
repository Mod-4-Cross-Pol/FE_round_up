import React from 'react';
import ShortEventCard from '../ShortEventCard/ShortEventCard';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

let mockEvents = [
    {
      id: 1,
      date: 20200407,
      time: 1700,
      unix_time: 1586278800,
      activity: 'Volleyball',
      location: 'Wash Park',
      lat: 39.700,
      long: -104.973,
      duration: 'Could be a min and max input from the user -- ex. 15 min 120 max',
      notes: 'If the weather is poor, meet here instead',
      max_players: 10,
      players_going: 5,
      skill_level: 'Professional',
      equipment: [
        {
          name: 'Net',
          still_needed: false
        },
        {
          name: 'Ball',
          still_needed: true
        }
      ]
    },
    {
      id: 2,
      date: 20200409,
      time: 1700,
      unix_time: 1586451600,
      activity: 'Spikeball',
      location: 'Cheeseman Park',
      lat: 39.731,
      long: -104.973,
      duration: 'Could be a min and max input from the user -- ex. 15 min 120 max',
      notes: 'If the weather is poor, meet here instead',
      max_players: 4,
      players_going: 4,
      skill_level: 'Casual',
      equipment: [
        {
          name: 'Net',
          still_needed: true
        },
        {
          name: 'Ball',
          still_needed: true
        }
      ]
    },
    {
      id: 3,
      date: 20200411,
      time: 2000,
      unix_time: 1586635200,
      activity: 'Kick Ball',
      location: 'Pepsi Center',
      lat: 39.748,
      long: -105.009,
      duration: 'Could be a min and max input from the user -- ex. 15 min 120 max',
      notes: 'If the weather is poor, meet here instead',
      max_players: 20,
      players_going: 10,
      skill_level: 'Amateur',
      equipment: [
        {
          name: 'Bases',
          still_needed: true
        },
        {
          name: 'Ball',
          still_needed: true
        }
      ]
    },
    {
      id: 4,
      date: 20200411,
      time: 2100,
      unix_time: 1586635201,
      activity: 'Beer Olympics',
      location: 'City Park',
      lat: 39.761,
      long: -105.012,
      duration: 'until the beer runs out...',
      notes: 'If the weather is poor, meet here instead',
      max_players: 25,
      players_going: 8,
      skill_level: 'Expert',
      equipment: [
        {
          name: 'Beer Goggles',
          still_needed: true
        },
        {
          name: 'Enthusiasm',
          still_needed: true
        }
      ]
    }
  ]

export default function ShortEventCardContainer({ navigation }) {

  let eventCards = mockEvents.map(event => <ShortEventCard
    activity={event.activity}
    location={event.location}
    time={event.time}
    event={event}
    navigation={navigation}/>)

  return (
    <ScrollView style={styles.scrollView}>
      {eventCards}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: 'auto',
    height: '100%',
    backgroundColor: '#292c33',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
});
