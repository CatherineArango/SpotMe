import { StyleSheet } from "react-native";
import { screenHeight } from "../screens/DetailScreen";

export const detailScreenTheme = StyleSheet.create({
    imagenContainer:{
        width:'100%',
        height:screenHeight *0.3
    },
    posterImage: {
        flex:1,
    }
    
});