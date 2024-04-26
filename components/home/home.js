import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import Option from './option';
import homePageStyles from '../../styles/home/home';
import { generalStyles } from '../../styles/general';
import { fontColors } from '../../styles/general';


const HomePage = () => {
  const caloryOptionColors = ['#7FB0F5', '#8A94EE'];
  const caloryButtonColors = ['#6779C7', '#7389D3', '#6B9BE2'];

  const rateOptionColors = ['#DAB384', '#E58C8C'];
  const rateButtonColors = ['#BD7474', '#BD7474', '#D09D93'];

  const recipeOptionColors = ['#B98CB5', '#759093'];
  const recipeButtonColors = ['#759093', '#88A3A7', '#9DBEC3'];

  return (
    <View style={generalStyles.container}>
      <View style={generalStyles.equalizer}> 
        <View style={generalStyles.headerSection}>
          <TouchableOpacity style={homePageStyles.exitButton}>
            <Feather name="log-out" size={24} color={fontColors.subtext} />
          </TouchableOpacity>
          <Text style={homePageStyles.textHeader}>Home</Text>
        </View>
        <View style={homePageStyles.contentContainer}>
          <Text style={homePageStyles.textDescription}>Choose any option</Text>
          <View style={homePageStyles.optionsSection}>  
              <Option
                headerText="Calorie Calculator"
                descriptionText="See how many calories your dish will have, by adding ingredients"
                imageSource={require('../../assets/images/salad.png')}
                optionColors={caloryOptionColors}
                buttonColors={caloryButtonColors}
              />
              <Option
                headerText="Optimal Daily Rate"
                descriptionText="See how many calories per day it is recommended to eat"
                imageSource={require('../../assets/images/yoga.png')}
                optionColors={rateOptionColors}
                buttonColors={rateButtonColors}
              />
              <Option
                headerText="Storage of Recipes"
                descriptionText="See various interesting and delicious cooking ideas"
                imageSource={require('../../assets/images/recipe.png')}
                optionColors={recipeOptionColors}
                buttonColors={recipeButtonColors}
              />
          </View>
        </View>
      </View>
    </View>
  );
};
  

export default HomePage;
