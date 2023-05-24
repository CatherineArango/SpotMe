import { StyleSheet } from "react-native";

export const cardTheme = StyleSheet.create({
    card: {
        backgroundColor:'red',
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
        width:'100%'
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: 10,
      },
      headerText: {
        marginLeft: 10,
        color: 'white',
        fontWeight: 'bold',
      },
      image: {
        width: '100%',
        height: 200,
      },
      footer: {
        padding: 10,
      },
      footerText: {
        marginBottom: 10,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
      },



    
});