# covidApp
Development for a Covid app
Used the react-native-plx library to link dependencies
multi-tabbed app for adding functionalities

How to install:
1. https://reactnative.dev/docs/environment-setup
2. https://reactnative.dev/docs/running-on-device

Can do bluetooth scans :
https://github.com/Polidea/react-native-ble-plx/wiki/Bluetooth-Scanning

Supports iOS background mode :
https://github.com/Polidea/react-native-ble-plx/wiki/Background-mode-(iOS)

Next steps: 

1. Need to link front-end and back-end
2. Write characteristics into BLE packets
To send advertising packets, we need to put device in peripheral mode, this library doesn't have support for that function so we will be using the following one:
https://www.npmjs.com/package/react-native-ibeacon-simulator

Helpful link to understand how BLE packets are structured
https://www.bluetooth.com/blog/bluetooth-low-energy-it-starts-with-advertising/

                       
