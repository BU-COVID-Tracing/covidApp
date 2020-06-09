import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Touchable, Button, FlatList } from 'react-native';

import Card from '../components/Card'

const ExposuresPageRisk = props => {
  return (
    <View style={styles.screen}>

      <View style={styles.container}>
        <Image style={styles.image} source={require('../images/risk.png')} />
        <Text style={styles.text1}>You have been exposed to one or more individuals who tested positive for the virus in the past 14 days</Text>

        <View style={{ flex: 1 }}>
          <FlatList
            keyExtractor={(item, index) => item.key}
            data={props.exp}
            renderItem={itemData =>
              <View style={{ alignItems: 'center' }}>
                <Card style={styles.card}>
                  <Text style={styles.title}>Exposure {itemData.item.key}</Text>
                  <Text style={styles.text}>You were exposed to this individual on {itemData.item.date}. Tap for more information.</Text>
                </Card>
              </View>
            }
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button 
            title='WHAT TO DO NEXT?' 
            color='rgb(248,145,85)' 
            onPress={() => {
              props.navigation.navigate({ routeName: 'Next Steps' })
            }}
          />
        </View>

      </View>

    </View>
  );
};

ExposuresPageRisk.navigationOptions = {
  headerTitle: 'Potential Exposures',
  headerStyle: {
    borderBottomColor: 'rgb(248,145,85)',
    borderBottomWidth: 3
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgb(255,220,220)'
  },
  image: {
    marginTop: 50,
    width: 100,
    height: 100
  },
  text1: {
    paddingHorizontal: 40,
    textAlign: 'center',
    color: 'red',
    fontSize: 18,
    marginBottom: 30
  },
  card: {
    width: '93%',
    marginBottom: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  text: {
    fontSize: 14,
    marginBottom: 7
  },
  buttonContainer: {
    paddingTop: 10,
    paddingBottom: 30,
    width: '80%'
  }
});

export default ExposuresPageRisk;
