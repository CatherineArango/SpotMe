import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  React from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Text } from 'react-native';
import { Background } from '../components/Background';
import { colours } from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';
const myIcon = <Icon name="rocket" size={30} color="#900" />;
const Tab = createBottomTabNavigator();
export const TabsMenu = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: { backgroundColor: colours.primary }
    }}
    
    >
      {/*<Tab.Screen name="HomeScreen" options={{title:'tab1'}} component={DetailScreen} /> */}
      <Tab.Screen name="HomeScreen"  options={{tabBarIcon:()=><Text>t1s</Text>}} component={HomeScreen} />
      <Tab.Screen name="DetailScreen"   options={{ 
      tabBarIcon: () => (
          <Icon name="md-play-skip-back-circle" color='black' />
        ), 
      }}  component={DetailScreen} />
    </Tab.Navigator>
  );
}

