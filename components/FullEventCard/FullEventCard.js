// import React from 'react';
import * as React from 'react';
import { StyleSheet, View, Button, Text, ScrollView, CheckBox, TouchableOpacity } from 'react-native';

export default function FullEventCard({ route }) {
  const { event } = route.params
  return (
    <View style={styles.container}>
      <View style={styles.closeButton}><Button title='X'/></View>
      <Text style={styles.titleText}>{event.activity}</Text>
      <Text style={styles.text}>Location: {event.location}</Text>
      <Text style={styles.text}>Start Time: {event.time}</Text>
      <Text style={styles.text}>End Time: NEED TO GET THIS ADJUSTED</Text>
      <Text style={styles.text}>Players Attending: {event.players_going}</Text>
      <Text style={styles.text}>Max Players: {event.max_players}</Text>
      <Text style={styles.text}>Skill Level: {event.skill_level}</Text>
      <Text style={styles.text}>Equipment:</Text>
      {event.equipment.map(e => {
        return <Text style={styles.text}>{e.name}</Text>
      })}
      <Button title='count me in!'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: '85%',
    backgroundColor: '#3b4aff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF'
  },
  text: {
    fontSize: 20,
    marginVertical: 5,
    color: '#FFF'
  }
});
