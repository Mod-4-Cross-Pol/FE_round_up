import React from 'react';
import { StyleSheet, View, Button, Text, TextInput} from 'react-native';

export default function CreateEventForm() {
  return (
    <View style={styles.container}>
      <View style={styles.closeButton}><Button title='X'/></View>
      <Text style={styles.text}>CREATE A NEW EVENT FORM!</Text>
      <TextInput style={styles.input} placeholder='Event Name...'/>
      <TextInput style={styles.input} placeholder='Location...'/>
      <TextInput style={styles.input} placeholder='Start Time...'/>
      <TextInput style={styles.input} placeholder='End Time...'/>
      <TextInput style={styles.input} placeholder='Total Players Required...'/>
      <TextInput style={styles.input} placeholder='Players Curretly Attending...'/>
      <TextInput style={styles.input} placeholder='Skill Level...'/>
      <TextInput style={styles.input} placeholder='Equipment Reqired...'/>
      <TextInput style={styles.input} placeholder='Notes...'/>
      <Button title='create event!'/>
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
  text: {
    fontSize: 20,
    marginVertical: 5,
    color: '#FFF'
  },
  input: {
    height: 50,
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 15
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5
  }
});
