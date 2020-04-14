import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from './components/LoginView/LoginView';
import FullEventCard from './components/FullEventCard/FullEventCard';
import CreateEventForm from './components/CreateEventForm/CreateEventForm';
import DatePicker from './components/DatePicker/DatePicker';
import Dashboard from './containers/Dashboard/Dashboard'
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/index';
import { connect } from 'react-redux';

const Stack = createStackNavigator();
const store = createStore(rootReducer, composeWithDevTools());


export default function App(props) {
  return (
    // <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginView'>
          <Stack.Screen name='Login' component={LoginView} />
          <Stack.Screen name='Dashboard' options={{ title: props.selectedDate }} component={Dashboard} />
          <Stack.Screen name='CreateEventForm' options={{ title: 'Create Event' }} component={CreateEventForm} />
          <Stack.Screen name='FullEventCard' options={{ title: 'Event' }} component={FullEventCard} />
          <Stack.Screen name='DatePicker' options={{ title: 'Date Selector' }} component={DatePicker} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

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
