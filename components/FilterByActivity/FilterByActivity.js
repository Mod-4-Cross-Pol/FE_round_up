import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

export default function FilterByActivity() {

  const [ activityFilterValue, setActivityFilterValue ] = useState('')

  return (
    <View style={styles.dropdownContainer}>
    <ModalDropdown
      textStyle={styles.dropdownText}
      dropdownTextStyle={styles.dropdownTextStyle}
      defaultValue='By activity -'
      options={[ 'Baseball', 'Basketball', 'Biking', 'Bocce ball', 'Climbing', 'Croquet', 'Disc golf', 'Fishing', 'Football', 'Hand ball', 'Kickball', 'Outdoor exercising', 'Slacklining', 'Soccer', 'Spike ball', 'Tennis', 'Trail hiking/walking', 'Ultimate frisbee', 'Volleyball', 'Miscellaneous']}
      onChange={activityFilterValue => setActivityFilterValue(activityFilterValue)}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  dropdownText: {
    fontSize: 20,
    backgroundColor: '#fff'
  },
  dropdownTextStyle: {
    fontSize: 20,
    width: 150
  },
  dropdownContainer: {
    alignItems: 'center',
    height: 70,
    width: '50%'
  }
});
