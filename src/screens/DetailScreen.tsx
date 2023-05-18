import React from 'react'
import { View, Text } from 'react-native'

export const DetailScreen = ({route}:{route:any}) => {
    const { id } = route.params;
    return (
        <View>
            <Text>DetailScreen</Text>
            <Text>ID: {id}</Text>
        </View>
    )
}
