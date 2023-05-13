import { StyleSheet } from "react-native";
import { width, height } from "../components/Background";

export const loginStyles = StyleSheet.create({
    backgroundImage: {
        width: width, 
        height: height,
        justifyContent: 'flex-end', // Coloca los hijos en la parte inferior del contenedor
        alignItems: 'center', // Centra los hijos horizontalmente
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255,255,255,0.5)' // Aumenta la opacidad del blanco para aclarar la imagen
    },
    centeredContent: {
        width:'90%',
        height:'60%',
        backgroundColor: 'rgba(255,255,255,0.6)', 
        marginBottom: '10%', 
        borderRadius:40,
        justifyContent: 'flex-start'
    },
    centeredEnd:{
        flex:1,
        paddingHorizontal:30,
        justifyContent: 'flex-end',
        height:600,
        marginBottom:50
    },
    centeredCenter:{
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center', 
    },
    title: {
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        marginTop:20,
        textAlign: 'center'
    },
    label:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',

    },
    inputField: {
        color:'white',
        fontSize:10
    },
    inputFieldIOS:{
        borderBottomColor:'white',
        borderBottomWidth:2,
        paddingBottom:4
    },
    buttonContainer:{
        alignItems:'center',
        marginTop:50
    },
    button:{
        borderWidth:2,
        borderColor:'white',
        paddingHorizontal:20,
        paddingVertical:5,
        borderRadius:100

    },
    buttonText: {
        fontSize:18,
        color:'white'
    },
    forgotPassword:{
        alignItems:'center',
        marginTop:10
    }

});