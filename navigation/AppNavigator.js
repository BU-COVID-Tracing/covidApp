import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import WelcomePage from '../screens/WelcomePage'
import MainPage from '../screens/MainPage'
import ExposuresPageSafe from '../screens/ExposuresPageSafe'
import ExposuresPageRisk from '../screens/ExposuresPageRisk'
import InfoPage from '../screens/InfoPage'
import ReportPage from '../screens/ReportPage'
import NextStepsPage from '../screens/NextStepsPage'

const AppNavigator = createStackNavigator({
  Welcome: WelcomePage,
  Home: MainPage,
  'Potential Exposures Safe': ExposuresPageSafe,
  'Potential Exposures Risk': ExposuresPageRisk,
  Information: InfoPage,
  'Report a Positive Test': ReportPage,
  'Next Steps': NextStepsPage
});

export default createAppContainer(AppNavigator);