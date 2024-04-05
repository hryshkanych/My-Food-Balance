import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import Option from './option';

const mainButtonColors = { firstColor: '#92A3FD', secondColor: '#9DCEFF', smallButtonColor: "#EBEEEE"};
const fontColors = { title: '#38232D', subtext: '#7B6F72', placeholder: '#ADA4A5', button: 'white' };
const gradientEnd = { x: 1, y: 0 };



const HomePage = () => {
  const caloryOptionColors = ['#7FB0F5', '#8A94EE'];
  const caloryButtonColors = ['#6779C7', '#7389D3', '#6B9BE2'];

  const rateOptionColors = ['#DAB384', '#E58C8C'];
  const rateButtonColors = ['#BD7474', '#BD7474', '#D09D93'];

  const recipeOptionColors = ['#B98CB5', '#759093'];
  const recipeButtonColors = ['#759093', '#88A3A7', '#9DBEC3'];

  return (
    <View style={homePageStyles.container}>
      <View style={homePageStyles.equalizer}> 
        <View style={homePageStyles.headerSection}>
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
                headerText="Optimal daily rate"
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
  
const homePageStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  equalizer: {
    paddingHorizontal: 32,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerSection: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: 5
  },
  contentContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  optionsSection: {
    width: '100%',
    height: '100%',
    gap: '15%',
  },
  textDescription: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 14,
    textAlign: 'center',
    color: fontColors.subtext,
  },
  textHeader: {
    marginTop: 20,
    fontSize: 22,
    textAlign: 'center',
    color: fontColors.title,
    fontWeight: 'bold',
  },
  exitButton: {
    width: 45,
    height: 45,
    position: 'absolute',
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: mainButtonColors.smallButtonColor,
    overflow: 'hidden',
    transform: [{ rotateY: '180deg' }],
  },
});


export default HomePage;
