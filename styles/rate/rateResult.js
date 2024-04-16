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
      marginTop: 20,
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
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: mainButtonColors.smallButtonColor,
        overflow: 'hidden',
        transform: [{ rotateY: '180deg' }],
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
      }
});

export default rateResultPageStyles;