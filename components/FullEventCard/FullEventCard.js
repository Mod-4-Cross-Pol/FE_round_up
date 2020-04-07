import React from 'react';
import { StyleSheet, View, Button, Text, ScrollView, CheckBox, TouchableOpacity } from 'react-native';

export default function FullEventCard() {
  return (
    <View style={styles.container}>
      <View style={styles.closeButton}><Button title='X'/></View>
      <Text style={styles.titleText}>Volleyball</Text>
      <Text style={styles.text}>Location: Wash Park</Text>
      <Text style={styles.text}>Start Time: 2:00PM</Text>
      <Text style={styles.text}>End Time: 4:00PM</Text>
      <Text style={styles.text}>Players Attending: 4</Text>
      <Text style={styles.text}>Max Players: 8</Text>
      <Text style={styles.text}>Skill Level: friendly game!</Text>
      <Text style={styles.text}>Equipment:</Text>
        <Text style={styles.text}>net</Text>
        <Text style={styles.text}>volleyball</Text>
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
