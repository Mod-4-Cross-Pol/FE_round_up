import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';

export default function ShortEventCard({activity, location, time, event, navigation}) {

  console.log('THIS THE NAVIGATION', navigation)
  
  return (
    <TouchableOpacity key={Math.random()} style={styles.smallCardContainer}
    onPress={() => {navigation.navigate('FullEventCard', {event: event})}}>
      <Text style={styles.titleText}>{activity}</Text>
      <Text style={styles.text}>{location}</Text>
      <Text style={styles.text}>Start time: {time}</Text>
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
    borderWidth: 6,
    borderColor: '#dee500'
  },
  titleText: {
    fontFamily: 'Farah',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 7
  },
  text: {
    fontSize: 18,
    color: '#000'
  }
});
