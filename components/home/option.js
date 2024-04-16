import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import optionStyles from '../../styles/home/option';
import { gradientEnd } from '../../styles/general';


const Option = ({ headerText, descriptionText, imageSource, optionColors, buttonColors }) => {

    const navigation = useNavigation();
  
    const navigateToNextScreen = () => {
      if (headerText === "Calorie Calculator") {
        navigation.navigate('Calorie'); 
      } else if (headerText == "Optimal daily rate") {
        navigation.navigate('DailyRate');
      }
    };
    
    return (
      <View style={optionStyles.option}>
        <LinearGradient
            colors={optionColors}
            end={gradientEnd}
            style={optionStyles.gradient}
        > 
          <View style={optionStyles.optionContent}>
            <View style={optionStyles.optionContentLeftPart}>
              <View style={optionStyles.optionTextSection}>
                <Text style={optionStyles.optionHeaderText}>{headerText}</Text>
                <Text style={optionStyles.optionDescriptionText}>{descriptionText}</Text>
              </View>
              <TouchableOpacity style={optionStyles.optionButton} onPress={navigateToNextScreen}>
                <LinearGradient
                  colors={buttonColors}
                  end={gradientEnd}
                  style={optionStyles.gradient}
                > 
                  <Text style={optionStyles.optionButtonText}>Let's Start</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={optionStyles.optionContentRightPart}>
              <View style={optionStyles.optionImageContainer}>
                <Image
                  source={imageSource}
                  style={optionStyles.optionImage}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  };


export default Option;
