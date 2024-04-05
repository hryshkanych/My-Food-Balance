import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const fontColors = { title: '#38232D', subtext: '#7B6F72', placeholder: '#ADA4A5', button: 'white' };

const Dish = ({ name, calories, imageSource }) => {
    return (
      <View style={DishStyles.container}>
        <View style={DishStyles.leftDishPart}>
          <View style={DishStyles.imageSection}>
            <View style={DishStyles.dishImageContainer}>
              <Image
                source={imageSource}
                style={DishStyles.dishImage}
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={DishStyles.textSection}>
            <Text style={DishStyles.nameDishText}>{name}</Text>
            <Text style={DishStyles.calDishText}>{calories} Cal</Text>
          </View>
        </View>
        <View style={DishStyles.rightDishPartButtons}>
          <TouchableOpacity style={DishStyles.dishesButton}>
            <Feather name="eye" size={26} color={fontColors.subtext} />
          </TouchableOpacity>
          <TouchableOpacity style={DishStyles.dishesButton}>
            <Feather name="trash-2" size={26} color={fontColors.subtext} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
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


export default Dish;