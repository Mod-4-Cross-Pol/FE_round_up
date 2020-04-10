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
      <Text style={styles.filterLabel}>Filter Events:</Text>
      <ModalDropdown
        renderButtonText={activityFilterValue => setFilterValue(activityFilterValue)}
        textStyle={styles.dropdownText}
        dropdownTextStyle={styles.dropdownTextStyle}
        defaultValue='>> select activity <<'
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
    backgroundColor: '#28BFBD',
    borderWidth: 4,
    borderColor: '#292c33',
    borderTopWidth: 0
  },
  filterLabel: {
    fontSize: 22
  },
  dropdownText: {
    fontSize: 22
  },
  dropdownTextStyle: {
    fontSize: 22,
    width: 200
  },
  dropdownContainer: {
    alignItems: 'center',
    height: 70,
    width: '50%'
  }
});
