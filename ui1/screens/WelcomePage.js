import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import Card from '../components/Card'

const WelcomePage = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.containerUp}>
        <Image style={styles.image} source={require('../images/coworkers.png')} />
        <Card style={styles.cardContainer}>
          <Text style={styles.title}>Join the fight</Text>
          <Text style={styles.text}>Help stop the spread of COVID-19.</Text>
          <Text style={styles.text}>This app notifies you when you have been exposed to a person who has tested positive for COVID-19, while maintaining everyone's identity anonymous.</Text>
        </Card>
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title='Join' 
          color='rgb(248,145,85)'
          onPress={() => props.goToHome(1)} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-between",
    padding: 10,
    marginTop: 30
  },
  containerUp: {
    alignItems: 'center'
  },
  cardContainer: {
    maxWidth: '90%'
  },
  image: {
    justifyContent: 'center',
    height: 373 * 392 / 817,
    width: 392,
    marginBottom: 30
  },
  buttonContainer: {
    marginBottom: 50,
    width: '80%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  text: {
    fontSize: 14,
    marginBottom: 7
  }
});

export default WelcomePage;
