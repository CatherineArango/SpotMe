import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/core';
import { Center } from '../interfaces/centerInterface';
import { style } from '../theme/appTheme';
import { detailScreenTheme } from '../theme/detailSreenTheme';

interface NavigationProps {
    center: Center;
  }
  export const screenHeight = Dimensions.get('screen').height;
  
export const DetailScreen = () => {
    const route = useRoute();
    const { center } = route.params as NavigationProps
    const uri =  `https://image.tmdb.org/t/p/w500${center.poster_path}`

    return (

        <View style={detailScreenTheme.imagenContainer}>
            <Image
            style={detailScreenTheme.posterImage}
                source={{uri}}    
            />
        </View>


    )
}
