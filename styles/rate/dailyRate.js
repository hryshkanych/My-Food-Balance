import { StyleSheet } from 'react-native';
import { mainButtonColors, fontColors, inputColors } from '../general';


const dailyRatePageStyles = StyleSheet.create({
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
      },

      inputField: {
        height: 55,
        width: '100%',
        paddingHorizontal: 15,
        backgroundColor: inputColors.main,
        borderRadius: 50,
        fontSize: 16,
        borderWidth: 1,
        borderColor: inputColors.border,
        display: 'flex',
        justifyContent: 'center'
      },

      measureField: {
        height: 55,
        width: '80%',
        paddingHorizontal: 15,
        backgroundColor: inputColors.main,
        borderRadius: 50,
        fontSize: 16,
        borderWidth: 1,
        borderColor: inputColors.border,
        display: 'flex',
        justifyContent: 'center'
      },

      buttonText: {
        color: fontColors.button,
        fontSize: 16,
        fontWeight: 'bold',
      },
      gradient: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      calculateButton: {
        width: '100%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:50,
        overflow: 'hidden',
        backgroundColor: 'green',
        marginBottom: 60,
        marginTop: 20
      },
      measurement: {
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: 'green',
      },
      inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
      }

  });


  const boxStyles = { 
    height: 55,
    width: '100%',
    paddingHorizontal: 15,
    backgroundColor: inputColors.main,
    borderRadius: 50,
    fontSize: 16,
    borderWidth: 1,
    borderColor: inputColors.border,
    display: 'flex',
    alignItems: 'center'
};
  
export { dailyRatePageStyles, boxStyles} ;