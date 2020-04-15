import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export function HeaderNav({ navigation }) {
  return (
    <View style={styles.nav}>
      <View style={styles.navButtonContainer}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('DatePicker')}><Text style={styles.buttonText}>CHANGE DATE</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('CreateEventForm')}><Text style={styles.buttonText}>CREATE EVENT</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#0060b4'
  },
  navButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 3
  },
  navText: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 70
  },
  navButton: {
    backgroundColor: '#FFF',
    height: 50,
    width: '40%',
    borderRadius: 25,
    margin: 10,
    backgroundColor: '#28BFBD',
    borderWidth: 6,
    borderColor: '#dee500',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18
  }
});

export default HeaderNav;
