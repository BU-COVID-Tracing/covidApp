import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

import Card from '../components/Card'

const ReportPage = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Enter authorization key</Text>
      <Text style={styles.second}>Obtain this key from your doctor</Text>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Key"/>
        <Button title='SUBMIT' style={styles.button} color='rgb(248,145,85)' />
      </View>
    </View>
  );
};

ReportPage.navigationOptions = {
  headerStyle: {
    borderBottomColor: 'rgb(248,145,85)',
    borderBottomWidth: 3
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 5
  },
  second: {
    fontSize: 17,
    marginBottom: 40
  },
  container: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: '60%',
    paddingHorizontal: 20
  },
  button: {
    alignItems:'center'
  }
});

export default ReportPage;
