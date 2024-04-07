import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import GoalDrawing from '../svgElements/goalDrawing';
import IntroGoalPageStyles from '../../styles/onboarding/introGoal';

const mainButtonColors = { firstColor: '#92A3FD', secondColor: '#9DCEFF' };
const fontColors = { title: '#38232D', subtext: '#7B6F72', placeholder: '#ADA4A5', button: 'white' };
const gradientEnd = { x: 1, y: 0 };


const IntroGoalPage = () => {
  const navigation = useNavigation();

  const navigateToNextScreen = () => {
    navigation.navigate('IntroMeal'); 
  };
    return (
      <View style={IntroGoalPageStyles.container}>
        <GoalDrawing></GoalDrawing>
        <View style={IntroGoalPageStyles.contentContainer}>
          <Text style={IntroGoalPageStyles.textHeader}>Follow Your Goal</Text>
          <Text style={IntroGoalPageStyles.textDescription}>Ready to start your journey to healthy eating and an active lifestyle? Welcome to My Food Balance – your perfect companion!</Text>
        </View>
        <View style={IntroGoalPageStyles.buttonContainer}>
          <TouchableOpacity style={IntroGoalPageStyles.button} onPress={navigateToNextScreen}>
            <LinearGradient
              colors={[mainButtonColors.firstColor, mainButtonColors.secondColor]}
              end={gradientEnd}
              style={IntroGoalPageStyles.gradient}
            >
              <Text style={IntroGoalPageStyles.buttonText}>{'>'}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
};


export default IntroGoalPage;



