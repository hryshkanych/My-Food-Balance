import { StyleSheet } from 'react-native';
import { fontColors } from '../general';

const IntroductionPageStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 34,
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
    },
    contentContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '80%',
      width: '100%',
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '20%',
      width: '100%',
    },
    textHeader: {
      marginTop: 20,
      fontSize: 28,
      textAlign: 'center',
      color: fontColors.title,
      fontWeight: 'bold',
    },
    textDescription: {
      marginTop: 20,
      fontSize: 14,
      textAlign: 'center',
      color: fontColors.subtext,
    },
    button: {
      width: '100%',
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
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

  export default IntroductionPageStyles;