import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppNavigator from './navigation/AppNavigator'

export default function App() {
  return (
    <View style={styles.screen}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
