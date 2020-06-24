import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

const Info2 = props => {
  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.containerUp}>
          <Image style={styles.image} source={require('../images/app.png')} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>How does this app work?</Text>
            <Text style={styles.paragraph}>
              Contact tracing apps can be used to notify you with a quick notification if you have been exposed to an infected
              individual. Once enabled, the user's phone periodically broadcasts Bluetooth beacons, to nearby phones. Once a 
              phone receives a beacon, it securely stores it on the device.
              {"\n"}{"\n"}
              Once someone has tested positive. They upload all their previously generated beacons (from the past 14 days) to
              a secure server. Subsequently, other users' phones periodically download that list of beacons. If a user finds 
              any of these beacons stored on their device, it means they have been in proximity to someone who tested positive 
              for the virus.
            </Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8} onPress={() => props.navigation.navigate('Information 3')}>
        <View style={styles.button}>
          <Text style={{ color: 'white' }}>NEXT</Text>
          <Image style={styles.image2} source={require('../images/arrow.png')} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

Info2.navigationOptions = {
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
    backgroundColor: 'white'
  },
  containerUp: {
    alignItems: 'center'
  },
  image: {
    justifyContent: 'center',
    height: 1005 * screenWidth / 1440,
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

export default Info2;
