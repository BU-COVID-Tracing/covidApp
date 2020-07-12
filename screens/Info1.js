import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

const Info1 = props => {
  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.containerUp}>
          <Image style={styles.image} source={require('../images/contact.png')} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>What is Contact Tracing?</Text>
            <Text style={styles.paragraph}>
              Traditional contact tracing is conducted by public health authorities in order to slow the spread of a disease.
              It involves the identification of persons who may have come into contact with an infected person in the period
              when they could have been contagious.
      </Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8} onPress={() => props.navigation.navigate('Information 2')}>
        <View style={styles.button}>
          <Text style={{ color: 'white' }}>NEXT</Text>
          <Image style={styles.image2} source={require('../images/arrow.png')} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

Info1.navigationOptions = {
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
    alignItems: 'center'
  },
  image: {
    justifyContent: 'center',
    height: 630 * screenWidth / 882,
    // height: 720 * screenWidth / 1280,
    width: screenWidth,
    marginBottom: 30,
    // resizeMode: "cover"
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
    lineHeight: 22
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

export default Info1;
