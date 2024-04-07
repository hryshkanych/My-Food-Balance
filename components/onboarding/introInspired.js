import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Ellipse, Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import InspiredDrawing from '../svgElements/inspiredDrawing';
import IntroInspiredPageStyles from '../../styles/onboarding/introInspired'

const mainButtonColors = { firstColor: '#92A3FD', secondColor: '#9DCEFF' };
const fontColors = { title: '#38232D', subtext: '#7B6F72', placeholder: '#ADA4A5', button: 'white' };
const gradientEnd = { x: 1, y: 0 };

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
