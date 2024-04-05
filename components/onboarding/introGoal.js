import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import GoalDrawing from '../svgElements/goalDrawing';

const mainButtonColors = { firstColor: '#92A3FD', secondColor: '#9DCEFF' };
const fontColors = { title: '#38232D', subtext: '#7B6F72', placeholder: '#ADA4A5', button: 'white' };
const gradientEnd = { x: 1, y: 0 };


const IntroGoalPage = () => {
  const navigation = useNavigation();

  const navigateToNextScreen = () => {
    navigation.navigate('IntroMeal'); 
  };
    return (
      <View style={styles.container}>
        <GoalDrawing></GoalDrawing>
        <View style={styles.contentContainer}>
          <Text style={styles.textHeader}>Follow Your Goal</Text>
          <Text style={styles.textDescription}>Ready to start your journey to healthy eating and an active lifestyle? Welcome to My Food Balance – your perfect companion!</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={navigateToNextScreen}>
            <LinearGradient
              colors={[mainButtonColors.firstColor, mainButtonColors.secondColor]}
              end={gradientEnd}
              style={styles.gradient}
            >
              <Text style={styles.buttonText}>{'>'}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },
  headerSection: {
    width: '100%',
    height: '55%',
  },
  waveDivider: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    overflow: 'hidden',
    lineHeight: 0,
  },
  trainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
  },
  contentContainer: {
    height: '25%',
    width: '100%',
    paddingHorizontal: 34,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '20%',
    width: '100%',
    paddingHorizontal: 34,
  },
  textHeader: {
    marginTop: 40,
    fontSize: 28,
    color: fontColors.title,
    fontWeight: 'bold',
  },
  textDescription: {
    marginTop: 20,
    fontSize: 14,
    color: fontColors.subtext,
  },
  button: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: fontColors.button,
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default IntroGoalPage;



