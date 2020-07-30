import 'react-native-gesture-handler';
import React, { Component, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  NativeEventEmitter,
  NativeModules,
  Platform,
  PermissionsAndroid,
  ScrollView,
  AppState,
  Button
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import BleManager from 'react-native-ble-manager';
import BLEAdvertiser from 'react-native-ble-advertiser';

import update from 'immutability-helper';
import UUIDGenerator from 'react-native-uuid-generator';

import Card from '../components/Card'

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);


class MainPage extends Component {
  constructor() {
    super()
    this.state = {
      scanning: false,
      peripherals: new Map(),
      appState: '',
      diagKeys: [],
      exposurePage: 'Potential Exposures Safe',
      uuid: '',
      devicesFound: []
    }
    this.handleDiscoverPeripheral = this.handleDiscoverPeripheral.bind(this);
    this.handleStopScan = this.handleStopScan.bind(this);
    this.handleUpdateValueForCharacteristic = this.handleUpdateValueForCharacteristic.bind(this);
    this.handleDisconnectedPeripheral = this.handleDisconnectedPeripheral.bind(this);
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);

    BleManager.start({ showAlert: false });

    this.handlerDiscover = bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', this.handleDiscoverPeripheral);
    this.handlerStop = bleManagerEmitter.addListener('BleManagerStopScan', this.handleStopScan);
    this.handlerDisconnect = bleManagerEmitter.addListener('BleManagerDisconnectPeripheral', this.handleDisconnectedPeripheral);
    this.handlerUpdate = bleManagerEmitter.addListener('BleManagerDidUpdateValueForCharacteristic', this.handleUpdateValueForCharacteristic);

    if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
        if (result) {
          console.log("Permission is OK");
        } else {
          PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
            if (result) {
              console.log("User accept");
            } else {
              console.log("User refuse");
            }
          });
        }
      });
    }

    this.initialize();

    // Uses the Apple code to pick up iPhones
    BLEAdvertiser.setCompanyId(0x4C);

    const eventEmitter = new NativeEventEmitter(NativeModules.BLEAdvertiser);

    eventEmitter.addListener('onDeviceFound', (event) => {
      //console.log('onDeviceFound', event);
      if (event.serviceUuids) {
        for (let i = 0; i < event.serviceUuids.length; i++) {
          if (event.serviceUuids[i] && event.serviceUuids[i].endsWith('00'))
            this.addDevice(event.serviceUuids[i], event.deviceName, event.deviceAddress, event.rssi, new Date())
        }
      }
    });
  }

  // Handle UUIDs

  // In storage: starts with '0' -> keys broadcasted
  //             starts with '1' -> keys received

  async initialize() {
    try {
      let value = await AsyncStorage.getItem('0');
      if (value === null) {
        this.create_new_uuid();
      } else {
        this.setState({
          uuid: value
        });
        let temp = this.state.uuid
        await AsyncStorage.setItem('0' + temp.substring(4, 8) + temp.substring(9, 13) + temp.substring(14, 18) + temp.substring(19, 23) + temp.substring(24), '1');
      }
    } catch (e) { console.log(e) }
  }

  async create_new_uuid() {
    UUIDGenerator.getRandomUUID((newUid) => {
      this.setState({
        uuid: 'b018' + newUid.slice(4)
      });
    });
    try {
      await AsyncStorage.removeItem('0')
      await AsyncStorage.setItem('0', this.state.uuid);
      let temp = this.state.uuid
      await AsyncStorage.setItem('0' + temp.substring(4, 8) + temp.substring(9, 13) + temp.substring(14, 18) + temp.substring(19, 23) + temp.substring(24), '1');
    } catch(e) { console.log(e) }
  }

  async testing_shit() {
    try {
      let value = await AsyncStorage.getItem('0')
      console.log(value)
    } catch(e) {}
    // this.removeAll()
    // this.create_new_uuid()

    // try {
    //   await AsyncStorage.setItem('11123', '1')
    // } catch(e) {}
  }

  //Scanning

  handleAppStateChange(nextAppState) {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!')
    }
    this.setState({ appState: nextAppState });
  }

  componentWillUnmount() {
    this.handlerDiscover.remove();
    this.handlerStop.remove();
    this.handlerDisconnect.remove();
    this.handlerUpdate.remove();
  }

  handleDisconnectedPeripheral(data) {
    let peripherals = this.state.peripherals;
    let peripheral = peripherals.get(data.peripheral);
    if (peripheral) {
      peripheral.connected = false;
      peripherals.set(peripheral.id, peripheral);
      this.setState({ peripherals });
    }
    console.log('Disconnected from ' + data.peripheral);
  }

  handleUpdateValueForCharacteristic(data) {
    console.log('Received data from ' + data.peripheral + ' characteristic ' + data.characteristic, data.value);
  }

  handleStopScan() {
    console.log('Scan is stopped');
    this.setState({ scanning: false });
  }

  startScan() {
    if (!this.state.scanning) {
      this.setState({ peripherals: new Map() });
      BleManager.scan([], 3, true).then((results) => {
        console.log('Scanning...');
        this.setState({ scanning: true });
      });
    }
  }

  retrieveConnected() {
    BleManager.getConnectedPeripherals([]).then((results) => {
      if (results.length == 0) {
        console.log('No connected peripherals')
      }
      console.log(results);
      var peripherals = this.state.peripherals;
      for (var i = 0; i < results.length; i++) {
        var peripheral = results[i];
        peripheral.connected = true;
        peripherals.set(peripheral.id, peripheral);
        this.setState({ peripherals });
      }
    });
  }

  handleDiscoverPeripheral(peripheral) {
    var peripherals = this.state.peripherals;
    let uuid = peripheral.advertising.serviceUUIDs[0]
    if(peripheral.rssi > -60){
      console.log(peripheral)
    }
    if (uuid !== undefined) {
      if (uuid.substring(0, 4) === "b018") {
        if (!peripheral.name) {
          peripheral.name = 'NO NAME';
        }
        peripherals.set(peripheral.id, peripheral);
        this.setState({ peripherals });
        this.storeKey(uuid.substring(4, 8) + uuid.substring(9, 13) + uuid.substring(14, 18) + uuid.substring(19, 23) + uuid.substring(24))
      }
    }
  }


  // Advertising

  addDevice(_uuid, _name, _mac, _rssi, _date) {
    let index = -1;
    for (let i = 0; i < this.state.devicesFound.length; i++) {
      if (this.state.devicesFound[i].uuid == _uuid) {
        index = i;
      }
    }
    if (index < 0) {
      let dev = { uuid: _uuid, name: _name, mac: _mac, rssi: _rssi, start: _date, end: _date };
      this.setState({
        devicesFound: update(this.state.devicesFound,
          { $push: [dev] }
        )
      });
    } else {
      //let dev = this.state.devicesFound[index];
      //const newList = this.state.devicesFound.splice(index, 1);
      const itemIndex = index;
      this.setState({
        devicesFound: update(this.state.devicesFound,
          { [itemIndex]: { end: { $set: _date }, rssi: { $set: _rssi || this.state.devicesFound[itemIndex].rssi } } }
        )
      });
    }
  }

  start() {
    // Manuf Data [1,0] picks up iPhones
    BLEAdvertiser.broadcast(this.state.uuid, [1, 0], {
      advertiseMode: BLEAdvertiser.ADVERTISE_MODE_BALANCED,
      txPowerLevel: BLEAdvertiser.ADVERTISE_TX_POWER_MEDIUM,
      connectable: false,
      includeDeviceName: false, includeTxPowerLevel: false
    })
      .then(sucess => console.log(this.state.uuid, "Adv Successful", sucess))
      .catch(error => console.log(this.state.uuid, "Adv Error", error));

    this.setState({
      isLogging: true,
    });
  }

  stop() {
    BLEAdvertiser.stopBroadcast()
      .then(sucess => console.log(this.state.uuid, "Stop Broadcast Successful", sucess))
      .catch(error => console.log(this.state.uuid, "Stop Broadcast Error", error));

    this.setState({
      isLogging: false,
    });
  }


  // Storing

  triggerExp() {
    this.setState({ exposurePage: 'Potential Exposures Risk' });
    Alert.alert(
      'Potential Exposure!',
      "You have been exposed to one or more individuals who tested positive for the virus in the past 14 days. Please go the 'Potential Exposure' page for guidelines on what to do next.",
      [{
        text: 'Close',
        style: "destructive"
      }]
    );
  }

  async storeKey(key) {
    try {
      await AsyncStorage.setItem('1' + key, '1')
    } catch (e) { console.log(e) }
  };

  async findKeys() {
    try {
      for (let diagK of this.state.diagKeys) {
        let value = await AsyncStorage.getItem('1' + diagK);
        if (value !== null) {
          this.triggerExp();
        }
      }
    } catch (e) { console.log(e) }
  }

  async getAllKeys() {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch (e) { console.log(e) }
    console.log(keys)
  }

  async removeOne(key) {
    try {
      await AsyncStorage.removeItem(key)
    } catch (e) { console.log(e) }
    console.log('Key ' + key + ' deleted')
  }

  async removeAll() {
    try {
      await AsyncStorage.clear()
    } catch (e) { console.log(e) }
    console.log('All keys deleted.')
  }

  apiCall() {
    fetch('http://54.237.106.177:8080/contactCheck', { method: "GET" })
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({diagKeys: []});
        for (let obj of responseData["dataContainer"]) {
          this.setState(prevState => ({
            diagKeys: [...prevState.diagKeys, obj.chirp]
          }))
        }
        this.findKeys();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const list = Array.from(this.state.peripherals.values());
    const btnScanTitle = 'Scanning ' + (this.state.scanning ? 'ON' : 'OFF');
    return (
      <View style={styles.screen}>

        <View style={styles.container}>
          <Card style={styles.card}>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate({ routeName: this.state.exposurePage })
            }}>
              <View style={styles.line}>
                <Image style={styles.image} source={require('../images/virus.png')} />
                <Text style={{ paddingLeft: 20 }}>Potential Exposures</Text>
              </View>
            </TouchableOpacity>
          </Card>
          <Card style={styles.card}>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate({ routeName: 'Report a Positive Test' })
            }}>
              <View style={styles.line}>
                <Image style={styles.image} source={require('../images/plus.png')} />
                <Text style={{ paddingLeft: 20 }}>Report a Positive Test</Text>
              </View>
            </TouchableOpacity>
          </Card>
          <Card style={styles.card}>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate({ routeName: 'Information 1' })
            }}>
              <View style={styles.line}>
                <Image style={styles.image} source={require('../images/info.png')} />
                <Text style={{ paddingLeft: 20 }}>Tell Me More</Text>
              </View>
            </TouchableOpacity>
          </Card>

          <Card style={{ ...styles.card, width: '70%' }}>
            <TouchableOpacity onPress={() => this.apiCall()}>
              <View style={styles.line}>
                <Text style={{ paddingLeft: 20 }}>Call API</Text>
              </View>
            </TouchableOpacity>
          </Card>

          <Card style={{ ...styles.card, width: '70%' }}>
            <TouchableOpacity onPress={() => this.startScan()}>
              <View style={styles.line}>
                <Text style={{ paddingLeft: 20 }}>{btnScanTitle}</Text>
              </View>
            </TouchableOpacity>
          </Card>

          <Card style={{ ...styles.card, width: '70%' }}>
            {this.state.isLogging ? (
              <TouchableOpacity onPress={() => this.stop()}>
                <View style={styles.line}>
                  <Text style={{ paddingLeft: 20 }}> Stop broadcasting </Text>
                </View>
              </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={() => this.start()}>
                  <View style={styles.line}>
                    <Text style={{ paddingLeft: 20 }}> Start broadcasting </Text>
                  </View>
                </TouchableOpacity>
              )}
          </Card>

          <Card style={{ ...styles.card, width: '70%' }}>
            <TouchableOpacity onPress={() => this.getAllKeys()}>
              <View style={styles.line}>
                <Text style={{ paddingLeft: 20 }}>Print seen keys</Text>
              </View>
            </TouchableOpacity>
          </Card>

          <Card style={{ ...styles.card, width: '70%' }}>
            <TouchableOpacity onPress={() => this.create_new_uuid()}>
              <View style={styles.line}>
                <Text style={{ paddingLeft: 20 }}>Create new key</Text>
              </View>
            </TouchableOpacity>
          </Card>

          <Card style={{ ...styles.card, width: '70%' }}>
            <TouchableOpacity onPress={() => this.testing_shit()}>
              <View style={styles.line}>
                <Text style={{ paddingLeft: 20 }}>test</Text>
              </View>
            </TouchableOpacity>
          </Card>

        </View>

      </View>
    );
  }
};


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
