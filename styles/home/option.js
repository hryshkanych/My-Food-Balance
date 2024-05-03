import { StyleSheet } from 'react-native';
import { fontColors } from '../general';

const optionStyles = StyleSheet.create({
    option: {
      width: '100%',
      height: '25%',
      borderRadius: 30,
      overflow: 'hidden',
    },
    optionContent: {
      width: '100%',
      height: '100%',
      paddingHorizontal: 15,
      paddingVertical: 20,
      flexDirection: 'row'
    },
    optionContentLeftPart:{
      width: '65%',
      height: '100%',
      justifyContent: 'space-around',
    },
    optionHeaderText: {
      color: fontColors.button,
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 5,
    },
    optionDescriptionText: {
      color: fontColors.button,
    },
    optionButton: {
      width: '70%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      overflow: 'hidden',
    },
    optionButtonText: {
      fontSize: 14,
      color: fontColors.button,
      fontWeight: 'bold'
    },
    optionContentRightPart:{
      width: '35%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    optionImageContainer:{
      width: '100%',
      aspectRatio: 1, 
      overflow: 'hidden',
    },
    optionImage: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    gradient: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default optionStyles;