import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const fontColors = { title: '#38232D', subtext: '#7B6F72', placeholder: '#ADA4A5', button: 'white' };


const Option = ({ headerText, descriptionText, imageSource, optionColors, buttonColors }) => {
    const gradientEnd = { x: 1, y: 0 };
    
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
              <TouchableOpacity style={optionStyles.optionButton}>
                <LinearGradient
                  colors={buttonColors}
                  end={gradientEnd}
                  style={optionStyles.gradient}
                > 
                  <Text style={optionStyles.optionButtonText}>Let`s Start</Text>
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


  const optionStyles = StyleSheet.create({
    option: {
      width: '100%',
      height: '25%',
      borderRadius: 30,
      overflow: 'hidden',
    },
    optionContent: {
      width: '100%',
      height: '100%',
      paddingHorizontal: 15,
      paddingVertical: 20,
      flexDirection: 'row'
    },
    optionContentLeftPart:{
      width: '65%',
      height: '100%',
      justifyContent: 'space-around',
    },
    optionHeaderText: {
      color: fontColors.button,
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 5,
    },
    optionDescriptionText: {
      color: fontColors.button,
    },
    optionButton: {
      width: '70%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      overflow: 'hidden',
    },
    optionButtonText: {
      fontSize: 14,
      color: fontColors.button,
      fontWeight: 'bold'
    },
    optionContentRightPart:{
      width: '35%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    optionImageContainer:{
      width: '100%',
      aspectRatio: 1, 
      overflow: 'hidden',
    },
    optionImage: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    gradient: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default Option;
  