import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const ReportPage = props => {

  const upload = async () => {
    try {

      let allKeys = []
      let out = []
      allKeys = await AsyncStorage.getAllKeys()
      
      for (let k of allKeys) {
        if (k !== '0' && k.substring(0, 1) === '0') {
          out.push(
            {
              'chirp': k.substring(1),
              'time': '1'
            }
          )
        }
      }

      console.log(out)

      fetch('http://54.237.106.177:8080/InfectedKey', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(out)
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
