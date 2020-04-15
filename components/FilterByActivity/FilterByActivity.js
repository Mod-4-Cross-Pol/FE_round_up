import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { connect } from 'react-redux';

export function FilterByActivity(props) {

  const setFilterValue = (value) => {
    props.setFilter(value)
  }

  return (
    <View style={styles.filterContainer}>
      <Text style={styles.currentDay}>{props.selectedDate}</Text>
      <ModalDropdown
        style={styles.modalDropdown}
        renderButtonText={activityFilterValue => setFilterValue(activityFilterValue)}
        textStyle={styles.dropdownText}
        dropdownTextStyle={styles.dropdownTextStyle}
        defaultValue='FILTER EVENTS'
        options={[ 'All events', 'Custom events', 'Baseball', 'Basketball', 'Biking', 'Bocce ball', 'Climbing', 'Croquet', 'Disc golf', 'Fishing', 'Football', 'Hand ball', 'Kickball', 'Outdoor exercising', 'Slacklining', 'Soccer', 'Spike ball', 'Tennis', 'Trail hiking/walking', 'Ultimate frisbee', 'Volleyball']}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    alignItems: 'center',
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
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  currentDay: {
    fontSize: 20,
    color: '#FFF'
  },
});

export const mapStateToProps = (state) => ({
  selectedDate: state.selectedDate
});

export default connect(mapStateToProps)(FilterByActivity);
