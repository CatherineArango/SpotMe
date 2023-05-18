
import { View, Text, ActivityIndicator } from 'react-native';
import { useCenters } from '../hooks/useCenters';

export const HomeScreen = () => {

    const {centersAvailable, isLoading}= useCenters();

    if(isLoading) {
        return(
            <View style={{flex:1, justifyContent:"center", alignContent:'center'}}>
                <ActivityIndicator color="red" size={20}/>
            </View>
        )
    }
    return (
        <View>
            <Text>
                homeScreen
            </Text>
        </View>
    )
}
