import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import cookieStyles from '../../styles/onboarding/logo';

const Cookie = () => {
    return (
      <View style={cookieStyles.cookie}>
        <View style={[cookieStyles.bite, cookieStyles.firstBite]} />
        <View style={[cookieStyles.bite, cookieStyles.secondBite]} />
        <View style={[cookieStyles.chocolateChip, cookieStyles.chocolateChip1]} />
        <View style={[cookieStyles.chocolateChip, cookieStyles.chocolateChip2]} />
        <View style={[cookieStyles.chocolateChip, cookieStyles.chocolateChip3]} />
        <View style={[cookieStyles.chocolateChip, cookieStyles.chocolateChip4]} />
        <View style={[cookieStyles.chocolateChip, cookieStyles.chocolateChip5]} />
        <View style={[cookieStyles.chocolateChip, cookieStyles.chocolateChip6]} />
        <View style={[cookieStyles.chocolateChip, cookieStyles.chocolateChip7]} />
      </View>
    );
  };
  
export default Cookie;
  