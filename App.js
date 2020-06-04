import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, Image } from 'react-native';

import WelcomePage from './screens/WelcomePage'
import MainPage from './screens/MainPage'
import ExposuresPageSafe from './screens/ExposuresPageSafe'
import ExposuresPageRisk from './screens/ExposuresPageRisk'

export default function App() {
  const [screen, setScreen] = useState();
  const [exposures, setExposures] = useState([]);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState('May 20, 2020')

  const goToHomeHandler = (pageNum) => {
    setScreen(pageNum);
  };

  const addExposure = () => {
    setCount((curCount) => curCount + 1)
    setExposures((currExp) => [...currExp, { key: (count+1).toString(), date: date }]);
  };

  let content = <WelcomePage goToHome={goToHomeHandler} />;
  let exposurePage = <ExposuresPageSafe />;

  if (screen === 1) {
    content = <MainPage />;
  }

  if (count != 0) {
    exposurePage = <ExposuresPageRisk exp={exposures} />;
  }

  return (
    <View style={styles.screen}>
      {content}
      {/* {exposurePage} */}
      {/* <View style={{padding: 20}}>
        <Button title='ADD' onPress={addExposure}  />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
