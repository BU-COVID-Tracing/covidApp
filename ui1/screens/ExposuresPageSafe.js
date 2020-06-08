import React from 'react';
import { StyleSheet, Text, View, Image, Touchable } from 'react-native';

import Card from '../components/Card'

const ExposuresPageSafe = props => {
  return (
    <View style={styles.screen}>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Potential Exposures</Text>
      </View>

      <View style={styles.container}>
        <Image style={styles.image} source={require('../images/check.png')} />
        <Text style={styles.text1}>You have not been exposed to someone who tested positive for the virus in the past 14 days</Text>
        <Card style={styles.card}>
          <Text style={styles.title}>Stay safe</Text>
          <Text style={styles.text}>Please keep following government recommendations.</Text>
          <Text style={styles.text}>Let's keep each other safe!</Text>
        </Card>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderBottomColor: 'rgb(248,145,85)',
    borderBottomWidth: 3
  },
  headerTitle: {
    color: 'black',
    fontSize: 20,
    paddingLeft: 20
  },
  container: { 
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgb(230,240,225)'
  }, 
  image: {
    marginTop: 50,
    width: 100,
    height: 100
  },
  text1: {
    paddingHorizontal: 40,
    textAlign: 'center',
    color: 'green',
    fontSize: 18,
    marginBottom: 50
  },
  card: {
    width: '90%',
    marginBottom: 10
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

export default ExposuresPageSafe;
