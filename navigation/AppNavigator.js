import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator, TransitionPresets  } from 'react-navigation-stack';

import WelcomePage from '../screens/WelcomePage'
import MainPage from '../screens/MainPage'
import ExposuresPageSafe from '../screens/ExposuresPageSafe'
import ExposuresPageRisk from '../screens/ExposuresPageRisk'
import ReportPage from '../screens/ReportPage'
import NextStepsPage from '../screens/NextStepsPage'
import Info1 from '../screens/Info1'
import Info2 from '../screens/Info2'
import Info3 from '../screens/Info3'

const AppNavigator = createStackNavigator({
  Welcome: WelcomePage,
  Home: MainPage,
  'Potential Exposures Safe': ExposuresPageSafe,
  'Potential Exposures Risk': ExposuresPageRisk,
  'Report a Positive Test': ReportPage,
  'Next Steps': NextStepsPage,
  'Information 1': Info1,
  'Information 2': Info2,
  'Information 3': Info3
}, {
  defaultNavigationOptions: {...TransitionPresets.SlideFromRightIOS},
  headerMode: 'float'
}
);

export default createAppContainer(AppNavigator);