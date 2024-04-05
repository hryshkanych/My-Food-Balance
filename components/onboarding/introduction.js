import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Cookie from './logo';

const mainButtonColors = { firstColor: '#92A3FD', secondColor: '#9DCEFF' };
const fontColors = { title: '#38232D', subtext: '#7B6F72', placeholder: '#ADA4A5', button: 'white' };
const gradientEnd = { x: 1, y: 0 };


const IntroductionPage = () => {
  const navigation = useNavigation();

  const navigateToNextScreen = () => {
    navigation.navigate('IntroGoal'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Cookie />
        <Text style={styles.textHeader}>My Food Balance</Text>
        <Text style={styles.textDescription}>The best App for your health and food project!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToNextScreen}>
          <LinearGradient
            colors={[mainButtonColors.firstColor, mainButtonColors.secondColor]}
            end={gradientEnd}
            style={styles.gradient}
          >
            <Text style={styles.buttonText}>Get Started</Text>
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
    paddingHorizontal: 34,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
    width: '100%',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
    width: '100%',
  },
  textHeader: {
    marginTop: 20,
    fontSize: 28,
    textAlign: 'center',
    color: fontColors.title,
    fontWeight: 'bold',
  },
  textDescription: {
    marginTop: 20,
    fontSize: 14,
    textAlign: 'center',
    color: fontColors.subtext,
  },
  button: {
    width: '100%',
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
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default IntroductionPage;
