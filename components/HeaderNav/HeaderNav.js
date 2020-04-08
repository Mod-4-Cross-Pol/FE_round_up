import React from 'react';
// import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CreateEventForm from '../CreateEventForm/CreateEventForm';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function HeaderNav({ navigation }) {
  return (
    <View style={styles.nav}>
      <View style={styles.navButtonContainer}>
        <View style={styles.navButton}><Button title='CHANGE DATE'/></View>
        <View style={styles.navButton}><Button onPress={() => navigation.navigate('CreateEventForm')}  title='CREATE EVENT'/></View>
        <View style={styles.navButton}><Button onPress={() => navigation.navigate('Login')} title='LOG OUT'/></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    width: '100%',
    height: 120,
    backgroundColor: '#292c33'
  },
  navText: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 70
  }
});
