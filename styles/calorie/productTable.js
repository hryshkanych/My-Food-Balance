import { StyleSheet } from 'react-native';

const fontColors = { title: '#38232D', subtext: '#7B6F72', placeholder: '#ADA4A5', button: 'white' };

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
  