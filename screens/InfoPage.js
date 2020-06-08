import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import Card from '../components/Card'

const InfoPage = props => {
  return (
    <View style={styles.screen}>
      <Text>Info about Covid and the app</Text>
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
