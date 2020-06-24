import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import Card from '../components/Card'

const NextStepsPage = props => {
  return (
    <View style={styles.screen}>
      <Text>What to do next?</Text>
    </View>
  );
};

NextStepsPage.navigationOptions = {
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

export default NextStepsPage;
