import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Card from '../components/Card'

const MainPage = props => {
  return (
    <View style={styles.screen}>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
      </View>

      <View style={styles.container}>
        <Card style={styles.card}>
          <TouchableOpacity>
            <View style={styles.line}>
              <Image style={styles.image} source={require('../images/virus.png')} />
              <Text style={{ paddingLeft: 20 }}>Potential Exposures</Text>
            </View>
          </TouchableOpacity>
        </Card>
        <Card>
          <TouchableOpacity>
            <View style={styles.line}>
              <Image style={styles.image} source={require('../images/plus.png')} />
              <Text style={{ paddingLeft: 20 }}>Report a Positive Test</Text>
            </View>
          </TouchableOpacity>
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
    width: '90%',
    marginTop: 20
  },
  card: {
    marginBottom: 15
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 30,
    height: 30
  }
});

export default MainPage;
