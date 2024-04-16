import { StyleSheet } from 'react-native';
import { mainButtonColors, fontColors, inputColors } from '../general';

const viewingDishPageStyles = StyleSheet.create({
    contentContainer: {
      width: '100%',
      flex: 1,
      paddingTop: 30,
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

      dishNameSection: {
        flexDirection: 'row',
        width: '100%',
        height: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'pink'
      },
      imageSection: {
        width: '17%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      dishImageContainer:{
        width: '100%',
        aspectRatio: 1, 
        overflow: 'hidden',
      },
      dishImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
      inputDishName: {
        height: 55,
        width: '79%',
        paddingHorizontal: 15,
        backgroundColor: inputColors.main,
        borderRadius: 50,
        fontSize: 16,
        borderWidth: 1,
        borderColor: inputColors.border,
      },
      gradient: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      textTotalContainer: {
        height: 50,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        paddingEnd: 10,
        marginTop: 10,
        marginBottom: 20
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
    })


    export default viewingDishPageStyles;