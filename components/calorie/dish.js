import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import DishStyles from '../../styles/calorie/dish';

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
  

export default Dish;