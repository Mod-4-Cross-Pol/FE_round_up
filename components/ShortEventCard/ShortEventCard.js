import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';

export default function ShortEventCard({activity, location, time, event, navigation}) {
  return (
    <TouchableOpacity key={Math.random()} style={styles.smallCardContainer}
    onPress={() => {navigation.navigate('FullEventCard', {event: event})}}>
      <Text style={styles.titleText}>{activity}</Text>
      <Text style={styles.text}>{location}</Text>
      <Text style={styles.text}>Time: {time}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  smallCardContainer: {
    height: 100,
    width: 'auto',
    marginBottom: 20,
    backgroundColor: '#28BFBD',
    borderRadius: 50,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#3b4aff'
  },
  titleText: {
    fontFamily: 'Farah',
    fontSize: 30,
    color: '#000',
    marginTop: 7
  },
  text: {
    fontSize: 20,
    color: '#000'
  }
});
