import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Alert } from 'react-native';

import Card from '../components/Card'

const InfoPage = props => {
  return (
    <View style={styles.screen}>
      <ScrollView>
        {/* <View style={styles.section}>
          <Text style={styles.title}>About COVID-19</Text>
          <Text style={styles.paragraph}>
            Hello{"\n"}
          </Text>
          <View style={styles.sepCont}><View style={styles.seperation}></View></View>
        </View> */}
        <View style={styles.section}>
          <Text style={styles.title}>What is Contact Tracing?</Text>
          <Text style={styles.paragraph}>
            Traditional contact tracing is conducted by public health authorities in order to slow the spread of a disease.
            It involves the identification of persons who may have come into contact with an infected person in the period
            when they could have been contagious. This process requires a lot of resources and can be slow since it requires
            manually finding and reaching out to many individuals.
          </Text>
          <View style={styles.sepCont}><View style={styles.seperation}></View></View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>How does this app work?</Text>
          <Text style={styles.paragraph}>
            Contact tracing apps can be used to notify you with a quick notification if you have been exposed to an infected
            individual. Once enabled, the user's phone periodically broadcasts Bluetooth beacons, while also listening for 
            Bluetooth beacons sent by other phones. Once a phone receives a beacon, it securely stores it on the device.
            {"\n"}{"\n"}
            Once someone has tested positive. They upload all their previously generated beacons (from the past 14 days) to 
            a secure server. Subsequently, other users' phones periodically download that list of beacons that were created 
            by people confirmed as positive for COVID-19. If a user finds any of these beacons stored on their device, it 
            means they may have been exposed to the virus.
            
          </Text>
          <View style={styles.sepCont}><View style={styles.seperation}></View></View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>How is your my privacy protected?</Text>
          <Text style={styles.paragraph}>
            The beacons shared by a device are randomly generated. Therefore, they cannot be traced back to a user's identity, 
            especially since they change multiple times throughout the day. Once a device receives a beacon, all that device 
            sees is a random string, so it cannot know which user's phone sent it. In addition, individuals positive for 
            COVID-19 upload their Bluetooth beacons anonymously.
          </Text>
          <View style={styles.sepCont}><View style={styles.seperation}></View></View>
        </View>
      </ScrollView>
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
    flex: 1,
    padding: 20
  },
  section: {
    marginBottom: 30
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 5
  },
  paragraph: {
    fontSize: 17,
    lineHeight: 22
  },
  sepCont: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30
  },
  seperation: {
    borderWidth: 1,
    borderColor: 'rgb(248,145,85)',
    width: '60%'
  }
});

export default InfoPage;
