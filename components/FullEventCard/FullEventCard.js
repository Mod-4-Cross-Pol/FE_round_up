import * as React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

export default function FullEventCard({ route }) {
  const { event } = route.params
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{event.activity}</Text>

      <View style={styles.lineItem}>
        <Text style={styles.label}>LOCATION:</Text>
        <Text style={styles.text}>{event.location}</Text>
      </View>

      <View style={styles.lineItem}>
        <Text style={styles.label}>START TIME:</Text>
        <Text style={styles.text}>{event.time}</Text>
      </View>

      <View style={styles.lineItem}>
        <Text style={styles.label}>END TIME:</Text>
        <Text style={styles.text}>0000</Text>
      </View>

      <View style={styles.lineItem}>
        <Text style={styles.label}># ATTENDING:</Text>
        <Text style={styles.text}>{event.players_going}</Text>
      </View>

      <View style={styles.lineItem}>
        <Text style={styles.label}># REQUIRED:</Text>
        <Text style={styles.text}>{event.max_players}</Text>
      </View>

      <View style={styles.lineItem}>
        <Text style={styles.label}>SKILL LEVEL:</Text>
        <Text style={styles.text}>{event.skill_level}</Text>
      </View>

      <View style={styles.lineItem}>
      <Text style={styles.label}>EQUIPMENT:</Text>

        <View>
          {event.equipment.map(e => {
            return <Text style={styles.equipmentList}>• {e.name}</Text>
          })}
        </View>
      </View>

      <View style={styles.countMeInButton}><Button title='Count Me In!'/></View>
      <Text style={styles.signedUpMessage}>You Are Not Currently</Text>
      <Text style={styles.signedUpMessage}>Signed Up For This Event</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: '100%',
    backgroundColor: '#3b4aff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lineItem: {
    justifyContent: 'space-between',
    width: '80%',
    flexDirection: 'row'
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#FFF'
  },
  label: {
    fontSize: 20,
    paddingTop: 13
  },
  text: {
    fontSize: 27,
    marginVertical: 5,
    color: '#FFF'
  },
  countMeInButton: {
    height: 50,
    width: 150,
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingTop: 5,
    marginTop: 40,
    marginBottom: 15
  },
  signedUpMessage: {
    fontSize: 20,
    color: 'yellow'
  },
  equipmentList: {
    fontSize: 20,
    marginVertical: 5,
    color: '#FFF'
  }
});
