
import { View, Text, ActivityIndicator, Button } from 'react-native';
import { useCenters } from '../hooks/useCenters';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


type RootStackParamList = {
    HomeScreen: undefined;
    DetailScreen: { id: string };
  };
  const Stack = createNativeStackNavigator<RootStackParamList>();
export const HomeScreen = ({ navigation }: { navigation: any }) => {

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

            <Button title="ir a detalles de pelis"
            onPress={() => navigation.navigate('DetailScreen', { id: '123' })}/>

        </View>
    )
}
