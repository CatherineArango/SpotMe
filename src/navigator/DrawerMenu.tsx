import { createDrawerNavigator } from '@react-navigation/drawer';
import { Navigator } from './Navigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import React from 'react';

const Drawer = createDrawerNavigator();

export const DrawerMenu = () =>{
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}