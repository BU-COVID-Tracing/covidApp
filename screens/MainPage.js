import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

import Card from '../components/Card'

const MainPage = props => {
  const [exposures, setExposures] = useState([
    '123',
    '12',
    '45'
  ]);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState('May 20, 2020');

  const addExposure = () => {
    setCount((curCount) => curCount + 1)
    setExposures((currExp) => [...currExp, { key: (count+1).toString(), date: date }]);
  };

  const saveKey = () => {
    AsyncStorage.setItem('123','May 20')
    Alert.alert('OK', 'Saved');
  }

  const findKey = async () => {
    try {
      const value = await AsyncStorage.getItem('123');
      if(value !== null) {
        // value previously stored
        Alert.alert('Found', 'key has been seen');
      } else {
        Alert.alert('Not found', 'Key not previously seen');
      };
    }
    catch(error) {

    }
  }


  const apiCall = () => {
    fetch('http://54.157.183.164:8080/contactCheck', { method: "GET" })
      .then((response) => response.json())
      .then((responseData) => {
        for (let obj of responseData) {
          for (let t of exposures) {
            if(obj.chirp === t) {
              setCount(1);
              return;
            }
          }
        }
        console.log("Not found")
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


  let exposurePage = 'Potential Exposures Safe';
  if (count != 0) {
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

  return (
    <View style={styles.screen}>

      <View style={styles.container}>
        <Card style={styles.card}>
          <TouchableOpacity onPress={() => {
            props.navigation.navigate({routeName: exposurePage})
          }}>
            <View style={styles.line}>
              <Image style={styles.image} source={require('../images/virus.png')} />
              <Text style={{ paddingLeft: 20 }}>Potential Exposures</Text>
            </View>
          </TouchableOpacity>
        </Card>
        <Card style={styles.card}>
          <TouchableOpacity onPress={() => {
            props.navigation.navigate({routeName: 'Report a Positive Test'})
          }}>
            <View style={styles.line}>
              <Image style={styles.image} source={require('../images/plus.png')} />
              <Text style={{ paddingLeft: 20 }}>Report a Positive Test</Text>
            </View>
          </TouchableOpacity>
        </Card>
        <Card style={styles.card}>
          <TouchableOpacity onPress={() => {
            props.navigation.navigate({routeName: 'Information'})
          }}>
            <View style={styles.line}>
              <Image style={styles.image} source={require('../images/info.png')} />
              <Text style={{ paddingLeft: 20 }}>Tell Me More</Text>
            </View>
          </TouchableOpacity>
        </Card>

        <Card style={{...styles.card, marginTop: 80, width: '40%'}}>
          <TouchableOpacity onPress={apiCall}>
            <View style={styles.line}>
              <Text style={{ paddingLeft: 20 }}>Call API</Text>
            </View>
          </TouchableOpacity>
        </Card>

        <Card style={{...styles.card, width: '40%'}}>
          <TouchableOpacity onPress={saveKey}>
            <View style={styles.line}>
              <Text style={{ paddingLeft: 20 }}>Save</Text>
            </View>
          </TouchableOpacity>
        </Card>

        <Card style={{...styles.card, width: '40%'}}>
          <TouchableOpacity onPress={findKey}>
            <View style={styles.line}>
              <Text style={{ paddingLeft: 20 }}>Retrieve</Text>
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
