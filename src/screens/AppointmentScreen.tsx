import  React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { detailScreenTheme } from '../theme/detailSreenTheme';
import { useRoute } from '@react-navigation/core';
import { Center } from '../interfaces/centerInterface';


interface NavigationProps {
    center: Center;
  }
export const AppointmentScreen = () => {
    const [selected, setSelected] = useState('');
    
    const route = useRoute();
    const { center } = route.params as NavigationProps;
    const uri =  `https://image.tmdb.org/t/p/w500${center.poster_path}`;
    return (
        <View>
            <View style={detailScreenTheme.imagenContainer}>
                <Image style={detailScreenTheme.posterImage} source={{ uri }} />
            </View>
            <Calendar
            onDayPress={day => {
                setSelected(day.dateString);
            }}
            markedDates={{
                [selected]: {selected: true, disableTouchEvent: true}
            }}
            />
        </View>
    )
}
