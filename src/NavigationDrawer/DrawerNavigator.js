import React from 'react';
import {View,Text} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from '../screen/HomeScreen';
import HomeDocs from '../screen/HomeDocs';

const DrawerNavigator = createDrawerNavigator({
  One: HomeScreen,
  // Two: HomeDocs
});

DrawerNavigator.navigationOptions = ({ /*navigation*/ }) => {
  return {
      header: null
  }
}
export default DrawerNavigator;