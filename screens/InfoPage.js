import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

import Card from '../components/Card'

const InfoPage = props => {
  const [keys, setKeys] = useState([]);

  const apiCall = () => {
    fetch('https://api.covid19api.com/summary', { method: "GET" })
      .then((response) => response.json())
      .then((responseData) => {
        setKeys((curr) => [...curr, (0).toString()]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  /*
  useEffect(() => {
    const interval = setInterval(() => {
      apiCall();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  */

  let content = <Text>Info about Covid and the app</Text>;
  if (keys.length > 0) {
    Alert.alert(
      'Potential Exposure!', 
      "You have been exposed to one or more individuals who tested positive for the virus in the past 14 days. Please go the 'Potential Exposure' page for guidelines on what to do next.",
      [{ 
        text: 'Close', 
        style: "destructive" 
      }]
    );
    content = <Text>We got something {keys} </Text>;
  }

  return (
    <View style={styles.screen}>
      {content}
      {/* <Button title='Call API' onPress={apiCall} /> */}
    </View>
  );
};

InfoPage.navigationOptions = {
  headerStyle: {
    borderBottomColor: 'rgb(248,145,85)',
    borderBottomWidth: 3
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default InfoPage;
