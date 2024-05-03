import { StyleSheet } from 'react-native';
import { fontColors } from '../general';

const IntroGoalPageStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: 'white'
    },
    headerSection: {
      width: '100%',
      height: '55%',
    },
    waveDivider: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      overflow: 'hidden',
      lineHeight: 0,
    },
    trainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
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
  
export default IntroGoalPageStyles;