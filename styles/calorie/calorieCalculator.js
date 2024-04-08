import { StyleSheet } from 'react-native';
import { mainButtonColors, fontColors } from '../general';

const calorieCalculatorPageStyles = StyleSheet.create({
    contentContainer: {
      width: '100%',
      flex: 1,
      paddingTop: 30,
      alignItems: 'center',
    //   backgroundColor: 'pink'
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
      dishesOprionsSection: {
        width: '100%',
        height: 60,
        // backgroundColor: '#999333',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
      },
      textSubHeader: {
        fontSize: 20,
        color: fontColors.title,
        fontWeight: 'bold',
      },
      dishesButtonsSection: {
        height: '100%',
        width: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'red',
        flexDirection: 'row'
      },
      dishesButton: {
        // backgroundColor: 'grey',
        height: 45,
        width: 45,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
      },
      gradient: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      listDishesSection: {
        // backgroundColor: 'grey',
        width: '100%',
        paddingTop: 20,
      },
      textTotalContainer: {
        height: 50,
        width: '100%',
        //  backgroundColor: 'red',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        paddingEnd: 10,
        marginTop: 10,
        marginBottom: 60,
      },
      textTotal: {
        color: '#8094FF',
        fontSize: 18,
        fontWeight: 'bold',
      },
      textCalTotal: {
        color: fontColors.subtext,
        fontSize: 18,
      }
});

export default calorieCalculatorPageStyles;
