import React from 'react'
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { CenterDBInterface, Center } from '../interfaces/centerInterface';
import { cardTheme } from '../theme/cardTheme';

import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';



interface Props {
  center:Center;
}
export const CenterCard = ({center}: Props) => {
    const uri =  `https://image.tmdb.org/t/p/w500${center.poster_path}`
    console.log(center.id);
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
        activeOpacity={0.8}
        style={cardTheme.card}
        onPress= { () => navigation.navigate('DetailScreen', { center })}>
    
          {/* Header */}
          <View style={cardTheme.header}>
            <Icon name="add-circle-outline" size={30} color="black" />
            <Text style={cardTheme.headerText}>{center.title}</Text>
          </View>
    
          {/* Imagen */}
          <Image source={{uri}} style={cardTheme.image} />
    
          {/* Footer */}
          <View style={cardTheme.footer}>
            <Text style={cardTheme.footerText}>Footer Text</Text>
            <View style={cardTheme.buttonContainer}>
              <Button title="Button 1" onPress={() => {}} />
              <Button title="Button 2" onPress={() => {}} />
            </View>
          </View>
    
        </TouchableOpacity>
      );
}
