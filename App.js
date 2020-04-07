import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import * as React from 'react';
// import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginView from './components/LoginView/LoginView';
import HeaderNav from './components/HeaderNav/HeaderNav';
import ShortEventCard from './components/ShortEventCard/ShortEventCard';
import FullEventCard from './components/FullEventCard/FullEventCard';
import CreateEventForm from './components/CreateEventForm/CreateEventForm';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>

        <HeaderNav />
        <ShortEventCard />

      </View>
    </NavigationContainer>
  );
}

//   INTRO SCREEN
//   <LoginView />

//   DASHBOARD SCREEN
//   <HeaderNav />
//   <ShortEventCard />

//   CREATE NEW EVENT SCREEN
//   <CreateEventForm />

//   VIEW FULL EVENT SCREEN
//   <FullEventCard />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28BFBD',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
