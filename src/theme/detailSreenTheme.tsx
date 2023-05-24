import { StyleSheet } from "react-native";
import { screenHeight } from "../screens/DetailScreen";

export const detailScreenTheme = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
      imagenContainer: {
        width: '100%',
        height: screenHeight * 0.3,
      },
      posterImage: {
        flex: 1,
      },
      contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      servicesCard: {
        width: '90%',
        backgroundColor: 'white',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        padding: 20,
        borderRadius: 10,
        marginBottom: 10,
      },
      cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      footerTextSC: {
        fontWeight: 'bold',
      },
      buttonContainerSC: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      cardSC: {
        backgroundColor: '#a8dadc',
        padding: 10,
        borderRadius: 20,
      },
      textSC: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      priceSC: {
        fontSize: 18,
        marginRight: 10,
      },
    });