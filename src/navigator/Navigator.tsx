
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { ProtectedScreen } from '../screens/ProtectedScreen';

const Stack = createStackNavigator();
export const  Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShows:false,
        cardStyle: {
            backgroudColor:'white'
        }
    }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen}options={{ headerShown: false }} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
    </Stack.Navigator>
  );
}