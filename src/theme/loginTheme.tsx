import { Dimensions, Platform, StyleSheet } from "react-native";
import { width, height } from "../components/Background";

export const loginStyles = StyleSheet.create({
    backgroundImage: {

        flex:1,
        width: width, 
        height: height,
        justifyContent: 'center', 
        alignItems: 'center', // Centra los hijos horizontalmente
       
    },
    overlay: {

        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255,255,255,0.6)', // Aumenta la opacidad del blanco para aclarar la imagen

    },
    formContainer:{

        width: 370,
        height: 528,
        borderRadius: 25,
        backgroundColor: 'rgba(255,255,255,0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        marginTop: Dimensions.get('window').height / 2 - 150, // Para que el formulario aparezca a media altura
         // Estilo para iOS
        ...(Platform.OS === 'ios' && { width: Dimensions.get('window').width - 50 }),
    },
    title: {

        color:'#a8dadc',
        fontSize:25,
        fontWeight:'600',
        textAlign: 'center',
        marginBottom: 100

    },
    inputField: {

        height: 40,
        color:'black',
        width: 308,
        borderColor:'transparent',
        borderBottomColor:'#ADB5BD',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,


    },
  
    button:{

        height: 47,
        width: 290,
        backgroundColor: '#a8dadc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        marginBottom:20,

    },
    buttonText: {

        fontSize:18,
        color:'white',
        fontWeight:'bold',


    }, 
    
    buttonText2: {

        fontSize:18,
        color:'#ADB5BD'

    },
    forgotPassword:{

        alignSelf:'center',
        color:'#ADB5BD',
        marginBottom:20

    },

    inputFieldIOS: {
        // Estilo específico para dispositivos iOS
        // Puedes ajustar los estilos según tus necesidades
        borderWidth: 0,
        borderBottomColor: '#ADB5BD',
        borderBottomWidth: 1,
        
        marginBottom: 10,
        paddingHorizontal: 10,
        ...(Platform.OS === 'ios' && { width: Dimensions.get('window').width - 110 }),

      },
    

});