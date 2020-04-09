import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

export default function FilterByDate() {
  return (
    <View style={styles.dropdownContainer}>
    <ModalDropdown
      textStyle={styles.dropdownText}
      dropdownTextStyle={styles.dropdownTextStyle}
      defaultValue='By date -'
      options={['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', '9:00PM','10:00PM' ]}
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