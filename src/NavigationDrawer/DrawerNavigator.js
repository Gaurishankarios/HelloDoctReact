import React from 'react';
import {View,Text, TouchableOpacity, Image} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from '../screen/HomeScreen';
import HomeDocs from '../screen/HomeDocs';

const DrawerNavigator = createDrawerNavigator({
  // HOME: HomeScreen,
  // BOOK: HomeScreen,
  Appoinments:HomeScreen,
   BOOK: HomeScreen,
  // Two: HomeDocs


});

DrawerNavigator.navigationOptions = ({ /*navigation*/ }) => {
  return {
      header: null
  }
}
export default DrawerNavigator;