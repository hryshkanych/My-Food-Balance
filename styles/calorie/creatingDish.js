import { StyleSheet } from 'react-native';
import { mainButtonColors, fontColors, inputColors } from '../general';

const creatingDishPageStyles = StyleSheet.create({
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
      ingredientsTextSection: {
        marginVertical: 10,
        width: '100%',
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'flex-start'

      },
      ingredientsText: {
        fontSize: 16,
        color: fontColors.title,
      },
      addIngredientection: {
        flexDirection: 'row',
        width: '100%',
        height: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'pink'
      },
      inputProductName: {
        height: 55,
        width: '55%',
        paddingHorizontal: 15,
        backgroundColor: inputColors.main,
        borderRadius: 50,
        fontSize: 16,
        borderWidth: 1,
        borderColor: inputColors.border,
      },
      inputGramm: {
        height: 55,
        width: '25%',
        paddingHorizontal: 15,
        backgroundColor: inputColors.main,
        borderRadius: 50,
        fontSize: 16,
        borderWidth: 1,
        borderColor: inputColors.border,
      },
      addProductButton: {
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: 'green',
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
      saveButton: {
        width: '100%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:50,
        overflow: 'hidden',
        backgroundColor: 'green',
        marginBottom: 60,
      },
      textTotalContainer: {
        height: 50,
        width: '100%',
        // backgroundColor: 'red',
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



export default creatingDishPageStyles;
