import React, { useState } from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { StyleSheet, View, Button, Text, TextInput, Alert } from 'react-native';

export default function CreateEventForm() {

  const [ nameOfSport, setNameOfSport ] = useState('')

  const validateInputs = () => {
    Alert.alert(nameOfSport)
  }

  const handleNameOfSportChange = e => {
  setNameOfSport(e.target.value);
  }

  //  ** Name of Sport should be a dropdown

  return (
    <View style={styles.container}>
      <Text style={styles.text}>CREATE A NEW EVENT</Text>
      <TextInput
        style={styles.input}
        placeholder='Name of Sport...'
        onChangeText={handleNameOfSportChange}
        value={nameOfSport}
      />
      <TextInput style={styles.input} placeholder='Location...'/>
      <TextInput style={styles.input} placeholder='Date...'/>

      <View style={styles.timeContainer}>
        <View style={styles.dropdownContainer}>
          <Text style={styles.text}>Start Time:</Text>
          <ModalDropdown
            textStyle={styles.dropdownText}
            dropdownTextStyle={styles.dropdownTextStyle}
            defaultValue='>> select time <<'
            options={['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', '9:00PM','10:00PM' ]}
          />
        </View>
        <View style={styles.dropdownContainer}>
          <Text style={styles.text}>End Time:</Text>
          <ModalDropdown
            textStyle={styles.dropdownText}
            dropdownTextStyle={styles.dropdownTextStyle}
            defaultValue='>> select time <<'
            options={['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', '9:00PM','10:00PM' ]}
          />
        </View>
      </View>

      <TextInput style={styles.input} keyboardType={'numeric'} placeholder='Total Players Required...'/>
      <TextInput style={styles.input} keyboardType={'numeric'} placeholder='Players Currently Attending...'/>

      <View style={styles.dropdownContainer}>
        <Text style={styles.text}>Skill Level:</Text>
        <ModalDropdown
          textStyle={styles.dropdownText}
          dropdownTextStyle={styles.dropdownTextStyle}
          defaultValue='>> select skill level <<'
          options={['just for fun', 'beginner', 'intermediate', 'advanced']}
        />
      </View>

      <TextInput style={styles.input} placeholder='Equipment Reqired...'/>
      <TextInput style={styles.input} placeholder='Notes...'/>
      <View style={styles.createEventButton}><Button onPress={validateInputs} title='create event!'/></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#28BFBD',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    marginVertical: 5,
    color: '#FFF',
    fontWeight: 'bold'
  },
  input: {
    height: 50,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 25,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 15
  },
  timeContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  dropdownContainer: {
    alignItems: 'center',
    height: 70,
    width: '50%'
  },
  dropdownText: {
    fontSize: 20,
    backgroundColor: '#fff'
  },
  dropdownTextStyle: {
    fontSize: 20,
    width: 150
  },
  createEventButton: {
    backgroundColor: '#FFF',
    marginTop: 20,
    height: 50,
    width: '50%',
    borderRadius: 25,
    paddingTop: 5
  }
});
