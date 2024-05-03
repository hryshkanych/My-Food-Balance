import { StyleSheet } from 'react-native';
import { fontColors } from '../general';

const productTableStyles = StyleSheet.create({
    container: {
      paddingTop: 10,
      width: '100%',
    },
    head: {
      backgroundColor: '#FEF4FF',
      flexDirection: 'row' 
    },
    row: {
      flexDirection: 'row',
    },
    text: {
      margin: 6,
      textAlign: 'center',
      fontSize: 14,
      color: fontColors.subtext,
    },
    headerText: {
      margin: 6,
      textAlign: 'center',
      fontSize: 14,
      color: fontColors.title,
      fontWeight: '400'
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonTrash: {
      height: 45,
      width: 45,
      borderRadius: 10,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default productTableStyles;
  