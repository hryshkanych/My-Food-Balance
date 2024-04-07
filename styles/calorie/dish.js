import { StyleSheet } from 'react-native';

const fontColors = { title: '#38232D', subtext: '#7B6F72', placeholder: '#ADA4A5', button: 'white' };

const DishStyles = StyleSheet.create({
    container: {
      width: '100%',
      height: 80,
      borderRadius: 22,
      backgroundColor: 'white',
      flexDirection: 'row',
      paddingHorizontal: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 10,
      elevation: 10, // Додайте цю властивість для Android, вона не впливає на iOS
      marginBottom: 15
    },
    leftDishPart: {
      flex: 1,
      height: '100%',
      flexDirection: 'row'
    },
    imageSection: {
      width: '20%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dishImageContainer: {
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
    textSection: {
      padding: 10,
      width: '80%',
      height: '100%',
      justifyContent: 'center',
      gap: 2,
    },
    nameDishText: {
      color: fontColors.title,
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 16,
    },
    calDishText: {
      color: fontColors.subtext,
      fontSize: 14,
    },
    rightDishPartButtons: {
      width: 94,
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    dishesButton: {
      height: 45,
      width: 45,
      borderRadius: 10,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    //   backgroundColor: 'pink'
    },
  });

export default DishStyles;
