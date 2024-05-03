import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Ellipse, Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import InspiredDrawing from '../svgElements/inspiredDrawing';
import IntroInspiredPageStyles from '../../styles/onboarding/introInspired'
import { mainButtonColors, gradientEnd } from '../../styles/general';

const IntroInspiredPage = () => {
  const navigation = useNavigation();

  const navigateToNextScreen = () => {
    navigation.navigate('Home'); 
  };

    return (
      <View style={IntroInspiredPageStyles.container}>
        <InspiredDrawing></InspiredDrawing>
        <View style={IntroInspiredPageStyles.contentContainer}>
          <Text style={IntroInspiredPageStyles.textHeader}>Get inspired and create</Text>
          <Text style={IntroInspiredPageStyles.textDescription}>We provide balanced recipes from breakfast to dinner, inspiring you with tasty, nutritious meals tailored to your preferences.</Text>
        </View>
        <View style={IntroInspiredPageStyles.buttonContainer}>
          <TouchableOpacity style={IntroInspiredPageStyles.button} onPress={navigateToNextScreen}>
            <LinearGradient
              colors={[mainButtonColors.firstColor, mainButtonColors.secondColor]}
              end={gradientEnd}
              style={IntroInspiredPageStyles.gradient}
            >
              <Text style={IntroInspiredPageStyles.buttonText}>{'>'}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
};


export default IntroInspiredPage;
