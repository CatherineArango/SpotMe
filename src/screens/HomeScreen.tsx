
import { View, Text, ActivityIndicator, Button } from 'react-native';
import { useCenters } from '../hooks/useCenters';
import { CenterCard } from '../components/CenterCard';
import { useSafeArea, useSafeAreaInsets } from 'react-native-safe-area-context';

export const HomeScreen = ({ navigation }: { navigation: any }) => {
    const {centersAvailable, isLoading}= useCenters();
    console.log(centersAvailable);
    const {top} = useSafeAreaInsets();
    console.log(top);
    if(isLoading) {
        return(
            <View style={{flex:1, justifyContent:"center", alignContent:'center'}}>
                <ActivityIndicator color="red" size={20}/>
            </View>
        )
    }
    return (
        <View style={{  top: top }}>
            <CenterCard center={centersAvailable[0]}/>

            <Button title="ir a detalles de pelis"
            onPress={() => navigation.navigate('DetailScreen', { id: '123' })}/>
        </View>

        
    )

    
}
