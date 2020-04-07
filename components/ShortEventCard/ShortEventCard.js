import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

export default function ShortEventCard() {
  return (
    <View>
      <Image
        source={require('../../assets/fake_map.png')}
        style={{width: 325, height: 300, marginBottom: 20, position: 'relative', top: 30}}/>
      <ScrollView style={styles.scrollView}>
        <View style={styles.smallCardContainer}>
          <Text style={styles.titleText}>Volleyball</Text>
          <Text style={styles.text}>Location: Wash Park</Text>
          <Text style={styles.text}>Time: 2:00PM</Text>
        </View>
        <View style={styles.smallCardContainer}>
          <Text style={styles.titleText}>Ultimate Frisbee</Text>
          <Text style={styles.text}>Location: Cheeseman Park</Text>
          <Text style={styles.text}>Time: 4:30PM</Text>
        </View>
        <View style={styles.smallCardContainer}>
          <Text style={styles.titleText}>Dodgeball</Text>
          <Text style={styles.text}>Location: Confuluence Park</Text>
          <Text style={styles.text}>Time: 6:45PM</Text>
        </View>
        <View style={styles.smallCardContainer}>
          <Text style={styles.titleText}>Backyard Croquet</Text>
          <Text style={styles.text}>Location: Sloan's Lake Park</Text>
          <Text style={styles.text}>Time: 10:00AM</Text>
        </View>
        <View style={styles.smallCardContainer}>
          <Text style={styles.titleText}>Beer Olympics</Text>
          <Text style={styles.text}>Location: City Park</Text>
          <Text style={styles.text}>Time: 3:00PM</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  navText: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 15
  },
  scrollView: {
    width: 'auto',
    position: 'relative',
    marginBottom: 50,
    top: 40
  },
  smallCardContainer: {
    height: 100,
    width: 'auto',
    marginBottom: 20,
    backgroundColor: '#3b4aff',
    borderRadius: 10,
    paddingLeft: 10
  },
  titleText: {
    fontSize: 30,
    color: '#FFF'
  },
  text: {
    fontSize: 20,
    color: '#FFF'
  }
});
