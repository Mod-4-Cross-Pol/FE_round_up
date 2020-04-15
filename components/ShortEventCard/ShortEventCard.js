import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export function ShortEventCard({ event, navigation }) {

  return (
    <TouchableOpacity key={Math.random()} style={styles.smallCardContainer}
    onPress={() => {navigation.navigate('FullEventCard', {event: event})}}>
      {event.activity === "Custom" && <Text style={styles.titleText}>{event.description}</Text>}
      {event.activity !== "Custom" && <Text style={styles.titleText}>{event.activity}</Text>}
      <Text style={styles.text}>{event.location}</Text>
      <Text style={styles.text}>Start time: {event.start_time}</Text>
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

export default ShortEventCard;
