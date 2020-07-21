import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const ReportPage = props => {

  const upload = async () => {
    try {
      let key = await AsyncStorage.getItem('0')

      key = key.substring(4, 8) + key.substring(9, 13) + key.substring(14, 18) + key.substring(19, 23) + key.substring(24)

      fetch('http://54.237.106.177:8080/InfectedKey', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          [
            {
              'chirp': key,
              'time': "1"
            }
          ])
      });
    } catch (e) { }

  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Enter authorization key</Text>
      <Text style={styles.second}>Obtain this key from your doctor</Text>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Key" />
        <Button
          title='SUBMIT'
          style={styles.button}
          color='rgb(248,145,85)'
          onPress={upload} />
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
    alignItems: 'center'
  }
});

export default ReportPage;
