import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Dish from './dish';
import calorieCalculatorPageStyles from '../../styles/calorie/calorieCalculator';
import { generalStyles } from '../../styles/general';
import { mainButtonColors, fontColors, gradientEnd } from '../../styles/general';


const CalorieCalculatorPage = () => {
    const { width: screenWidth } = useWindowDimensions();

    return (
      <ScrollView style={[generalStyles.container, { width: screenWidth }]}>
        <View style={generalStyles.equalizer}> 
          <View style={generalStyles.headerSection}>
            <TouchableOpacity style={calorieCalculatorPageStyles.exitButton}>
              <Feather name="chevron-right" size={24} color={fontColors.subtext} />
            </TouchableOpacity>
            <Text style={calorieCalculatorPageStyles.textHeader}>Calorie Calculator</Text>
          </View>
          <View style={calorieCalculatorPageStyles.contentContainer}>
            <View style={calorieCalculatorPageStyles.dishesOprionsSection}>
                <Text style={calorieCalculatorPageStyles.textSubHeader}>Today`s dishes</Text>
                <View style={calorieCalculatorPageStyles.dishesButtonsSection}>
                    <TouchableOpacity style={calorieCalculatorPageStyles.dishesButton}>
                        <LinearGradient
                            colors={[mainButtonColors.firstColor, mainButtonColors.secondColor]}
                            end={gradientEnd}
                            style={calorieCalculatorPageStyles.gradient}
                        >
                            <Feather name="plus" size={26} color={fontColors.button} />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={calorieCalculatorPageStyles.dishesButton}>
                        <LinearGradient
                            colors={[mainButtonColors.firstColor, mainButtonColors.secondColor]}
                            end={gradientEnd}
                            style={calorieCalculatorPageStyles.gradient}
                        >
                             <Feather name="x" size={26} color={fontColors.button} />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={calorieCalculatorPageStyles.listDishesSection}>
                <Dish name="Pasta with eggs" calories="720" imageSource={require('../../assets/images/food-tray.png')} />
                <Dish name="Pasta with eggs" calories="720" imageSource={require('../../assets/images/food-tray.png')} />
                <Dish name="Pasta with eggs" calories="720" imageSource={require('../../assets/images/food-tray.png')} />
                <Dish name="Pasta with eggs" calories="720" imageSource={require('../../assets/images/food-tray.png')} />
                <Dish name="Pasta with eggs" calories="720" imageSource={require('../../assets/images/food-tray.png')} />
                <Dish name="Pasta with eggs" calories="720" imageSource={require('../../assets/images/food-tray.png')} />
                <Dish name="Pasta with eggs" calories="720" imageSource={require('../../assets/images/food-tray.png')} />
                <Dish name="Pasta with eggs" calories="720" imageSource={require('../../assets/images/food-tray.png')} />
                <View style={calorieCalculatorPageStyles.textTotalContainer}>
                    <Text style={calorieCalculatorPageStyles.textTotal}>Total: </Text>
                    <Text style={calorieCalculatorPageStyles.textCalTotal}>1990 Cal </Text>
                </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };


export default CalorieCalculatorPage;
