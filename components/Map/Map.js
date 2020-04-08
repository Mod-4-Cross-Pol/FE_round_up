import React, { Component } from 'react';

import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Map() {

let events = [
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
  ]
    return (
      <MapView
      showsUserLocation={true}
      style={styles.map}
      region={{
        latitude: 39.781511,
        longitude: -104.798673,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05
      }}
      >
      {events.map(event => {
        return <MapView.Marker
          coordinate=
            {{latitude: event.lat,
            longitude: event.long}}
          title={event.activity}
          description={event.notes}
        />
      })}
      </MapView>
    );
  }

const styles = StyleSheet.create({
  map: {
    height: 350,
    width: 'auto',
    borderWidth: 5,
    borderColor: '#292c33'
  }
});
