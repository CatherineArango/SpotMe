import React, { ReactNode } from 'react'
import { StyleSheet, ImageBackground, Dimensions, View, Text, TextInput, SafeAreaView } from 'react-native';
import { loginStyles } from '../theme/loginTheme';

const { width, height } = Dimensions.get('window');
export { width, height };

interface BackgroundProps {
    children: ReactNode;
  }
  
export const Background = ({ children }:BackgroundProps) => {
    return (
        <ImageBackground
            source={require('../../assets/background.jpeg')}
            style={loginStyles.backgroundImage}
        >
            <View style={loginStyles.overlay} />
            {children}
        </ImageBackground>
    )
}



