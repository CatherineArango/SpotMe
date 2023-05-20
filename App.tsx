import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

import { TabsMenu } from './src/navigator/TabsMenu';
import { LoginScreen } from './src/screens/LoginScreen';
import { SignUpScreen } from './src/screens/SignUpScreen';

const Stack = createStackNavigator();

export const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const login = () => {
    setUserLoggedIn(true);
  };

  useEffect(() => {
    // Aquí puedes realizar la lógica para verificar si el usuario está logueado o no
    // y actualizar el estado "userLoggedIn" en consecuencia
    // Por ejemplo, puedes utilizar AsyncStorage, Redux, o cualquier otra forma de gestión de estado
  }, []);

  const onLogin = () => {
    Keyboard.dismiss();
    login();
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userLoggedIn ? (
          <Stack.Screen name="TabsMenu" component={TabsMenu} />
        ) : (
          <>
            <Stack.Screen
              name="LoginScreen"
              options={{ title: 'Login' }}
            >
              {(props) => <LoginScreen {...props} onLoginStack={onLogin} />}
            </Stack.Screen>

            <Stack.Screen
              name="SignUpScreen"
              options={{ title: 'Sign Up' }}
              component={SignUpScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
