import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function LoginView({ navigation }) {
  return (
    <View style={styles.container}>
       <Image
         style={styles.logo}
         source={require('../../assets/game_on_logo.png')}
       />
      <View style={styles.viewInput}><TextInput style={styles.input} placeholder='username...'/></View>
      <View style={styles.viewInput}><TextInput style={styles.input} placeholder='password...' /></View>
      <View style={styles.signInButton}><Button onPress={() => navigation.navigate('Dashboard')} title='SIGN IN'/></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292c33',
    alignItems: 'center'
  },
  logo: {
    height: 300,
    width: '100%',
    resizeMode: 'contain',
    marginTop: '30%',
    marginLeft: 15
  },
  input: {
    height: 50,
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 25,
    textAlign: 'center',
    fontSize: 20
  },
  viewInput: {
    marginTop: 20
  },
  signInButton: {
    marginTop: 20,
    width: 200
  },

});
