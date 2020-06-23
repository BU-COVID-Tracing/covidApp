import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

const Info3 = props => {
  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.containerUp}>
          <Image style={styles.image} source={require('../images/privacy.png')} />
          <View style={styles.textContainer}>
          <Text style={styles.title}>How is your my privacy protected?</Text>
          <Text style={styles.paragraph}>
            The Bluetooth beacons shared by a device are randomly generated and change multiple times throughout the day. Therefore, 
            they cannot be traced back to a user's identity. In addition, individuals who test positive for COVID-19
            upload their Bluetooth beacons anonymously.
          </Text>
          <View style={styles.sepCont}><View style={styles.seperation}></View></View>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8} onPress={() => props.navigation.popToTop('Home')}>
        <View style={styles.button}>
          <Text style={{ color: 'white' }}>OKAY!</Text>
          <Image style={styles.image2} source={require('../images/arrow.png')} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

Info3.navigationOptions = {
  headerTitle: 'Information',
  headerStyle: {
    borderBottomColor: 'rgb(248,145,85)',
    borderBottomWidth: 3
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "white"
  },
  containerUp: {
    alignItems: 'center',
    justifyContent: "center"
  },
  image: {
    justifyContent: 'center',
    height: 1458 * screenWidth / 1824,
    width: screenWidth,
    marginBottom: 30
  },
  image2: {
    width: 18,
    height: 18
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 15
  },
  textContainer: {
    alignItems: 'flex-start',
    justifyContent: "flex-start",
    maxWidth: '90%'
  },
  paragraph: {
    fontSize: 17,
    lineHeight: 22,
    marginRight: 15
  },
  buttonContainer: {
    width: '80%'
  },
  button: {
    marginBottom: 30,
    marginTop: 15,
    backgroundColor: 'rgb(248,145,85)',
    height: 37,
    elevation: 5,
    justifyContent: 'center',
    paddingHorizontal: 25,
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between"
  }
});

export default Info3;
