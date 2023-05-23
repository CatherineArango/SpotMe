import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  React from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { colours } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailScreen } from '../screens/DetailScreen';
const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{
      headerShown:true,
  }}>
      <HomeStack.Screen options={{ headerShown: false }} name="HomeScreenee" component={HomeScreen} />
      <HomeStack.Screen 
        name="DetailScreen" 
        component={DetailScreen}
        options={{
          headerTransparent: true,  // Hace que la cabecera sea transparente
          headerBackTitleVisible: false,  // Oculta el título del botón de atrás
          headerTintColor: 'white',  // Cambia el color del botón de atrás
          headerTitle: ''
        }} 
      />
    </HomeStack.Navigator>
  );
}
export const TabsMenu = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: { backgroundColor: colours.primary }
    }}>
      <Tab.Screen name="HomeScreenee"   options={{ 
        tabBarIcon: () => (<Icon name="md-play-skip-back-circle" color='black' /> ), 
        headerShown: false}}  component={HomeStackScreen} />
    </Tab.Navigator>
  );
}

