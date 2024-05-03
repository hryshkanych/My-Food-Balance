import { StyleSheet } from 'react-native';
import { fontColors } from '../general';

const IntroMealPageStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
    },
    contentContainer: {
      height: '25%',
      width: '100%',
      paddingHorizontal: 34,
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      height: '20%',
      width: '100%',
      paddingHorizontal: 34,
    },
    textHeader: {
      marginTop: 40,
      fontSize: 28,
      color: fontColors.title,
      fontWeight: 'bold',
    },
    textDescription: {
      marginTop: 20,
      fontSize: 14,
      color: fontColors.subtext,
    },
    button: {
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      overflow: 'hidden',
    },
    gradient: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: fontColors.button,
      fontSize: 25,
      fontWeight: 'bold',
    },
  });

export default IntroMealPageStyles;