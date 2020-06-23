import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Card from '../components/Card'

const MainPage = props => {
  const [diagKeys, setDiagKeys] = useState([
    '123',
    '5'
  ]);

  let exposurePage = 'Potential Exposures Safe';
  
  const triggerExp = () => {
    // exposurePage = <ExposuresPageRisk exp={exposures} />;
    exposurePage = 'Potential Exposures Risk';
    Alert.alert(
      'Potential Exposure!',
      "You have been exposed to one or more individuals who tested positive for the virus in the past 14 days. Please go the 'Potential Exposure' page for guidelines on what to do next.",
      [{
        text: 'Close',
        style: "destructive"
      }]
    );
  }

  const storeKey = async (key) => {
    try {
      await AsyncStorage.setItem('123', '0')
    } catch(e) {console.log(e)}
  };

  const findKeys = async () => {
    try {
      for (let diagK of diagKeys) {
        let value = await AsyncStorage.getItem(diagK);
        if (value !== null) {
          triggerExp();
        }
      }
    } catch(e) {console.log(e)}
  }

  const getAllKeys = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch(e) {console.log(e)}
    console.log(keys)
  }

  const removeOne = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {console.log(e)}
    console.log('Done.')
  }

  const removeAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {console.log(e)}
    console.log('Done.')
  }
  
  const apiCall = () => {
    fetch('http://54.157.183.164:8080/contactCheck', { method: "GET" })
      .then((response) => response.json())
      .then((responseData) => {
        setDiagKeys([]);
        for (let obj of responseData) {
          setDiagKeys((curr) => [...curr, obj.chirp]);
        }
        findKeys(); 
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     apiCall();
  //   }, 13000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <View style={styles.screen}>

      <View style={styles.container}>
        <Card style={styles.card}>
          <TouchableOpacity onPress={() => {
            props.navigation.navigate({ routeName: exposurePage })
          }}>
            <View style={styles.line}>
              <Image style={styles.image} source={require('../images/virus.png')} />
              <Text style={{ paddingLeft: 20 }}>Potential Exposures</Text>
            </View>
          </TouchableOpacity>
        </Card>
        <Card style={styles.card}>
          <TouchableOpacity onPress={() => {
            props.navigation.navigate({ routeName: 'Report a Positive Test' })
          }}>
            <View style={styles.line}>
              <Image style={styles.image} source={require('../images/plus.png')} />
              <Text style={{ paddingLeft: 20 }}>Report a Positive Test</Text>
            </View>
          </TouchableOpacity>
        </Card>
        <Card style={styles.card}>
          <TouchableOpacity onPress={() => {
            props.navigation.navigate({ routeName: 'Information 1' })
          }}>
            <View style={styles.line}>
              <Image style={styles.image} source={require('../images/info.png')} />
              <Text style={{ paddingLeft: 20 }}>Tell Me More</Text>
            </View>
          </TouchableOpacity>
        </Card>

        <Card style={{ ...styles.card, marginTop: 80, width: '40%' }}>
          <TouchableOpacity onPress={apiCall}>
            <View style={styles.line}>
              <Text style={{ paddingLeft: 20 }}>Call API</Text>
            </View>
          </TouchableOpacity>
        </Card>

        <Card style={{ ...styles.card, width: '40%' }}>
          <TouchableOpacity onPress={storeKey}>
            <View style={styles.line}>
              <Text style={{ paddingLeft: 20 }}>Save</Text>
            </View>
          </TouchableOpacity>
        </Card>

        <Card style={{ ...styles.card, width: '40%' }}>
          <TouchableOpacity onPress={findKeys}>
            <View style={styles.line}>
              <Text style={{ paddingLeft: 20 }}>Retrieve</Text>
            </View>
          </TouchableOpacity>
        </Card>

        <Card style={{ ...styles.card, width: '50%' }}>
          <TouchableOpacity onPress={getAllKeys}>
            <View style={styles.line}>
              <Text style={{ paddingLeft: 20 }}>Print seen keys</Text>
            </View>
          </TouchableOpacity>
        </Card>

      </View>

    </View>
  );
};

MainPage.navigationOptions = {
  headerStyle: {
    borderBottomColor: 'rgb(248,145,85)',
    borderBottomWidth: 3
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30
  },
  container: {
    width: '90%'
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
