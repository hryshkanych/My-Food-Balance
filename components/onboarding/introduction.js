import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const mainButtonColors = { firstColor: '#92A3FD', secondColor: '#9DCEFF' };
const fontColors = { title: '#38232D', subtext: '#7B6F72', placeholder: '#ADA4A5', button: 'white' };
const gradientEnd = { x: 1, y: 0 };

const Cookie = () => {
  return (
    <View style={styles.cookie}>
      <View style={[styles.bite, styles.firstBite]} />
      <View style={[styles.bite, styles.secondBite]} />
      <View style={[styles.chocolateChip, styles.chocolateChip1]} />
      <View style={[styles.chocolateChip, styles.chocolateChip2]} />
      <View style={[styles.chocolateChip, styles.chocolateChip3]} />
      <View style={[styles.chocolateChip, styles.chocolateChip4]} />
      <View style={[styles.chocolateChip, styles.chocolateChip5]} />
      <View style={[styles.chocolateChip, styles.chocolateChip6]} />
      <View style={[styles.chocolateChip, styles.chocolateChip7]} />
    </View>
  );
};

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
  cookie: {
    width: '90%',
    aspectRatio: 1,
    borderRadius: '180%',
    backgroundColor: '#b46d3c',
    overflow: 'hidden',
  },
  bite: {
    width: '40%',
    height: '30%',
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: '50%',
    zIndex: 1,
  },
  firstBite: {
    left: '50%',
  },
  secondBite: {
    left: '70%',
    top: '13%',
  },
  chocolateChip: {
    position: 'absolute',
    width: '7%',
    height: '7%',
    backgroundColor: '#38232D',
    borderRadius: '14%',
  },
  chocolateChip1: {
    left: '40%',
    top: '50%',
  },
  chocolateChip2: {
    left: '70%',
    top: '70%',
  },
  chocolateChip3: {
    left: '40%',
    top: '16%',
  },
  chocolateChip4: {
    left: '15%',
    top: '67%',
  },
  chocolateChip5: {
    left: '50%',
    top: '35%',
  },
  chocolateChip6: {
    left: '17%',
    top: '22%',
  },
  chocolateChip7: {
    left: '77%',
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
