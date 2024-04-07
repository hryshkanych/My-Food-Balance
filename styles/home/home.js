import { StyleSheet } from 'react-native';
import { mainButtonColors, fontColors } from '../general';


const homePageStyles = StyleSheet.create({
    contentContainer: {
      width: '100%',
      flex: 1,
      alignItems: 'center',
    },
    optionsSection: {
      width: '100%',
      height: '100%',
      gap: '15%',
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
  });

  
export default homePageStyles;