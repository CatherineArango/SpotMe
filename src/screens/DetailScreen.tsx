import React from 'react'
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/core';

export const DetailScreen = () => {
    const route = useRoute();
    const { id } = route.params;
    return (
        <View>
            <Text>DetailScreen</Text>
            <Text>ID: {id}</Text>
        </View>
    )
}
