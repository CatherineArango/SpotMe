
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LoginScreen } from '../screens/LoginScreen';
import { SignUpScreen } from '../screens/SignUpScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { TabsMenu } from './TabsMenu';

const Stack = createStackNavigator();
export const  Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        //headerShown:true,
        headerStyle:{
        elevation:0,
        shadowColor:'transparent'
        },
        cardStyle: {
            backgroundColor:'white'
        }
    }}>
     
      <Stack.Screen name="SignUpScreen" options={{title:"SignUp"}} component={SignUpScreen} />
      <Stack.Screen name="HomeScreen" options={{title:"Home", headerBackTitle:"hola"}} component={TabsMenu} />
      <Stack.Screen name="DetailScreen" options={{title:"Datail"}} component={DetailScreen} />
    </Stack.Navigator>
  );
}