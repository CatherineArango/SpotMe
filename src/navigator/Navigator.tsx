
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LoginScreen } from '../screens/LoginScreen';
import { SignUpScreen } from '../screens/SignUpScreen';
import { ProtectedScreen } from '../screens/ProtectedScreen';
import { HomeScreen } from '../screens/HomeScreen';

const Stack = createStackNavigator();
export const  Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false,
        cardStyle: {
            backgroundColor:'white'
        }
    }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen}options={{ headerShown: false }} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}