import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, Image } from 'react-native';

import WelcomePage from './screens/WelcomePage'
import MainPage from './screens/MainPage'
import ExposuresPageSafe from './screens/ExposuresPageSafe'
import ExposuresPageRisk from './screens/ExposuresPageRisk'
import AppNavigator from './navigation/AppNavigator'

export default function App() {
  const [screen, setScreen] = useState();

  const goToHomeHandler = (pageNum) => {
    setScreen(pageNum);
  };

  let content = <WelcomePage goToHome={goToHomeHandler} />;

  if (screen === 1) {
    content = <AppNavigator />;
  }

  // return (
  //   <View style={styles.screen}>
  //     {content}
  //     {/* {exposurePage} */}
  //     {/* <View style={{padding: 20}}>
  //       <Button title='ADD' onPress={addExposure}  />
  //     </View> */}
  //   </View>
  // );

  
  return (
    <View style={styles.screen}>
      {/* {content} */}
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
