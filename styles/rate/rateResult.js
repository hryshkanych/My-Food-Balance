import { StyleSheet } from 'react-native';
import { mainButtonColors, fontColors, inputColors } from '../general';


const rateResultPageStyles = StyleSheet.create({
    contentContainer: {
      width: '100%',
      flex: 1,
      alignItems: 'center',
    },
    optionsSection: {
      marginTop: 40,
      width: '100%',
      height: '100%',
      gap: '20%',
    },
    textDescription: {
      marginTop: '32%',
      marginBottom: 10,
      fontSize: 14,
      textAlign: 'center',
      color: fontColors.subtext,
    },
    textHeader: {
      marginTop: 20,
      fontSize: 22,
      textAlign: 'center',
      color: fontColors.title,
      fontWeight: 'bold',
    },
      exitButton: {
        width: 45,
        height: 45,
        position: 'absolute',
        opacity: 0.3,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: mainButtonColors.smallButtonColor,
        overflow: 'hidden',
      },
      animationContainer:{
        height: 390,
        aspectRatio: 1,
        marginTop: 20,
      },

      textRes: {
        marginTop: 20,
        fontSize: 22,
        textAlign: 'center',
        color: fontColors.title,
        fontWeight: '500',
      },

      textCal: {
        marginTop: 20,
        fontSize: 22,
        textAlign: 'center',
        color: '#8A94EE',
        fontWeight: '500',
        marginBottom: 15,
      },
       
      back: {
        width: '100%',
        height: '62%',
        backgroundColor: 'pink',
        position: 'absolute',
        top: 0,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 10,
        elevation: 10, 
      },

      gradient: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      
});

export default rateResultPageStyles;