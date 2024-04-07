import { StyleSheet } from 'react-native';

const mainButtonColors = { firstColor: '#92A3FD', secondColor: '#9DCEFF', smallButtonColor: "#EBEEEE"};
const fontColors = { title: '#38232D', subtext: '#7B6F72', placeholder: '#ADA4A5', button: 'white' };

const homePageStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
    },
    equalizer: {
      paddingHorizontal: 32,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerSection: {
      width: '100%',
      height: 100,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 5
    },
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