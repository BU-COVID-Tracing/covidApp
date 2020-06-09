import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Card from '../components/Card'

const MainPage = props => {
  const [exposures, setExposures] = useState([]);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState('May 20, 2020');

  const addExposure = () => {
    setCount((curCount) => curCount + 1)
    setExposures((currExp) => [...currExp, { key: (count+1).toString(), date: date }]);
  };

  let exposurePage = 'Potential Exposures Safe';
  if (count != 0) {
    // exposurePage = <ExposuresPageRisk exp={exposures} />;
    exposurePage = 'Potential Exposures Risk';
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
      </View>

    </View>
  );
};

/*
class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  apiCall = () => {
    fetch("https://api.covid19api.com/summary")
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.Countries
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    const { dataSource } = this.state
    this.apiCall();
    return (
      <View>
        <Text>Hello</Text>
        <Text></Text>
      </View>
    );
  }
}
*/

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
