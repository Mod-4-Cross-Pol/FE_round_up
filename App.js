import 'react-native-gesture-handler';
import * as React from 'react';
// import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from './components/LoginView/LoginView';
import Map from './components/Map/Map';
import HeaderNav from './components/HeaderNav/HeaderNav';
import ShortEventCard from './components/ShortEventCard/ShortEventCard';
import FullEventCard from './components/FullEventCard/FullEventCard';
import CreateEventForm from './components/CreateEventForm/CreateEventForm';
import Dashboard from './containers/Dashboard/Dashboard'
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginView'>
        <Stack.Screen name='Login' component={LoginView} />
        <Stack.Screen name='Dashboard' component={Dashboard} />
        <Stack.Screen name='CreateEventForm' component={CreateEventForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//   INTRO SCREEN
//   <LoginView />

//   DASHBOARD SCREEN
//   <HeaderNav />
//   <Map />
//   <ShortEventCard />

//   CREATE NEW EVENT SCREEN
//   <CreateEventForm />

//   VIEW FULL EVENT SCREEN
//   <FullEventCard />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28BFBD',
    alignItems: 'center'
  }
});

//   '#292c33'
//   '#3b4aff'
//   '#28BFBD'
