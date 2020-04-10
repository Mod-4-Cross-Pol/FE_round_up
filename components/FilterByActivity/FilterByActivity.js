import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

export default function FilterByActivity(props) {

  const [ activityFilterValue, setActivityFilterValue ] = useState('')

  const setFilterValue = (value) => {
    //  setActivityFilterValue(value)
    props.setFilter(value)
  }
  return (
    <View style={styles.filterContainer}>
      <ModalDropdown
        style={styles.modalDropdown}
        renderButtonText={activityFilterValue => setFilterValue(activityFilterValue)}
        textStyle={styles.dropdownText}
        dropdownTextStyle={styles.dropdownTextStyle}
        defaultValue='FILTER EVENTS BY ACTIVITY'
        options={[ 'Show all events', 'Baseball', 'Basketball', 'Biking', 'Bocce ball', 'Climbing', 'Croquet', 'Disc golf', 'Fishing', 'Football', 'Hand ball', 'Kickball', 'Outdoor exercising', 'Slacklining', 'Soccer', 'Spike ball', 'Tennis', 'Trail hiking/walking', 'Ultimate frisbee', 'Volleyball', 'Miscellaneous']}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    backgroundColor: '#0060b4'
  },
  dropdownText: {
    fontSize: 20
  },
  dropdownTextStyle: {
    fontSize: 22,
    width: 250
  },
  dropdownContainer: {
    alignItems: 'center',
    height: 70,
    width: '50%'
  },
  modalDropdown: {
    backgroundColor: '#28BFBD',
    borderWidth: 6,
    borderColor: '#dee500',
    borderRadius: 23,
    height: 46,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  }
});
