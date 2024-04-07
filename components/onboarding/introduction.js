import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Cookie from './logo';
import IntroductionPageStyles from '../../styles/onboarding/introduction';
import { mainButtonColors, gradientEnd } from '../../styles/general';

const IntroductionPage = () => {
  const navigation = useNavigation();

  const navigateToNextScreen = () => {
    navigation.navigate('IntroGoal'); 
  };

  return (
    <View style={IntroductionPageStyles.container}>
      <View style={IntroductionPageStyles.contentContainer}>
        <Cookie />
        <Text style={IntroductionPageStyles.textHeader}>My Food Balance</Text>
        <Text style={IntroductionPageStyles.textDescription}>The best App for your health and food project!</Text>
      </View>
      <View style={IntroductionPageStyles.buttonContainer}>
        <TouchableOpacity style={IntroductionPageStyles.button} onPress={navigateToNextScreen}>
          <LinearGradient
            colors={[mainButtonColors.firstColor, mainButtonColors.secondColor]}
            end={gradientEnd}
            style={IntroductionPageStyles.gradient}
          >
            <Text style={IntroductionPageStyles.buttonText}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default IntroductionPage;
