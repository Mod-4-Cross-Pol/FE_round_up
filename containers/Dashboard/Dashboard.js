import * as React from 'react';
import Map from '../../components/Map/Map';
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import ShortEventCardContainer from '../../components/ShortEventCardContainer/ShortEventCardContainer';
import { StyleSheet, View } from 'react-native';

export default function Dashboard({ navigation }) {
  return (
    <View>
      <HeaderNav navigation={navigation}/>
      <Map navigation={navigation}/>
      <ShortEventCardContainer navigation={navigation}/>
    </View>
  );
}
