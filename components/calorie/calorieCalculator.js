import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const mainButtonColors = { firstColor: '#92A3FD', secondColor: '#9DCEFF', smallButtonColor: "#EBEEEE"};
const fontColors = { title: '#38232D', subtext: '#7B6F72', placeholder: '#ADA4A5', button: 'white' };
const gradientEnd = { x: 1, y: 0 };

const Dish = ({ name, calories, imageSource }) => {
    return (
      <View style={DishStyles.container}>
        <View style={DishStyles.leftDishPart}>
          <View style={DishStyles.imageSection}>
            <View style={DishStyles.dishImageContainer}>
              <Image
                source={imageSource}
                style={DishStyles.dishImage}
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={DishStyles.textSection}>
            <Text style={DishStyles.nameDishText}>{name}</Text>
            <Text style={DishStyles.calDishText}>{calories} Cal</Text>
          </View>
        </View>
        <View style={DishStyles.rightDishPartButtons}>
          <TouchableOpacity style={DishStyles.dishesButton}>
            <Feather name="eye" size={26} color={fontColors.subtext} />
          </TouchableOpacity>
          <TouchableOpacity style={DishStyles.dishesButton}>
            <Feather name="trash-2" size={26} color={fontColors.subtext} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const DishStyles = StyleSheet.create({
    container: {
      width: '100%',
      height: 80,
      borderRadius: 22,
      backgroundColor: 'white',
      flexDirection: 'row',
      paddingHorizontal: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 10,
      elevation: 10, // Додайте цю властивість для Android, вона не впливає на iOS
      marginBottom: 15
    },
    leftDishPart: {
      flex: 1,
      height: '100%',
      flexDirection: 'row'
    },
    imageSection: {
      width: '20%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dishImageContainer: {
      width: '100%',
      aspectRatio: 1,
      overflow: 'hidden',
    },
    dishImage: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    textSection: {
      padding: 10,
      width: '80%',
      height: '100%',
      justifyContent: 'center',
      gap: 2,
    },
    nameDishText: {
      color: fontColors.title,
      fontWeight: 'semi-bold',
      fontSize: 16,
      lineHeight: 16,
    },
    calDishText: {
      color: fontColors.subtext,
      fontSize: 14,
    },
    rightDishPartButtons: {
      width: 94,
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    dishesButton: {
      height: 45,
      width: 45,
      borderRadius: 10,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    //   backgroundColor: 'pink'
    },
  });

const CalorieCalculatorPage = () => {
    const { width: screenWidth } = useWindowDimensions();

    return (
      <ScrollView style={[calorieCalculatorPageStyles.container, { width: screenWidth }]}>
        <View style={calorieCalculatorPageStyles.equalizer}> 
          <View style={calorieCalculatorPageStyles.headerSection}>
            <TouchableOpacity style={calorieCalculatorPageStyles.exitButton}>
              <Feather name="chevron-right" size={24} color={fontColors.subtext} />
            </TouchableOpacity>
            <Text style={calorieCalculatorPageStyles.textHeader}>Calorie Calculator</Text>
          </View>
          <View style={calorieCalculatorPageStyles.contentContainer}>
            <View style={calorieCalculatorPageStyles.dishesOprionsSection}>
                <Text style={calorieCalculatorPageStyles.textSubHeader}>Today`s dishes</Text>
                <View style={calorieCalculatorPageStyles.dishesButtonsSection}>
                    <TouchableOpacity style={calorieCalculatorPageStyles.dishesButton}>
                        <LinearGradient
                            colors={[mainButtonColors.firstColor, mainButtonColors.secondColor]}
                            end={gradientEnd}
                            style={calorieCalculatorPageStyles.gradient}
                        >
                            <Feather name="plus" size={26} color={fontColors.button} />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={calorieCalculatorPageStyles.dishesButton}>
                        <LinearGradient
                            colors={[mainButtonColors.firstColor, mainButtonColors.secondColor]}
                            end={gradientEnd}
                            style={calorieCalculatorPageStyles.gradient}
                        >
                             <Feather name="x" size={26} color={fontColors.button} />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={calorieCalculatorPageStyles.listDishesSection}>
                <Dish name="Pasta with eggs" calories="720" imageSource={require('../../assets/images/food-tray.png')} />
                <Dish name="Pasta with eggs" calories="720" imageSource={require('../../assets/images/food-tray.png')} />
                <Dish name="Pasta with eggs" calories="720" imageSource={require('../../assets/images/food-tray.png')} />
                <Dish name="Pasta with eggs" calories="720" imageSource={require('../../assets/images/food-tray.png')} />
                <Dish name="Pasta with eggs" calories="720" imageSource={require('../../assets/images/food-tray.png')} />
                <Dish name="Pasta with eggs" calories="720" imageSource={require('../../assets/images/food-tray.png')} />
                <Dish name="Pasta with eggs" calories="720" imageSource={require('../../assets/images/food-tray.png')} />
                <Dish name="Pasta with eggs" calories="720" imageSource={require('../../assets/images/food-tray.png')} />
                <View style={calorieCalculatorPageStyles.textTotalContainer}>
                    <Text style={calorieCalculatorPageStyles.textTotal}>Total: </Text>
                    <Text style={calorieCalculatorPageStyles.textCalTotal}>1990 Cal </Text>
                </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };


  const calorieCalculatorPageStyles = StyleSheet.create({
    container: {
      flex: 1,
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
      paddingBottom: 5,
    },
    contentContainer: {
      width: '100%',
      flex: 1,
      paddingTop: 30,
      alignItems: 'center',
    //   backgroundColor: 'pink'
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
      dishesOprionsSection: {
        width: '100%',
        height: 60,
        // backgroundColor: '#999333',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
      },
      textSubHeader: {
        fontSize: 20,
        color: fontColors.title,
        fontWeight: 'bold',
      },
      dishesButtonsSection: {
        height: '100%',
        width: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'red',
        flexDirection: 'row'
      },
      dishesButton: {
        // backgroundColor: 'grey',
        height: 45,
        width: 45,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
      },
      gradient: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      listDishesSection: {
        // backgroundColor: 'grey',
        height: '100%',
        width: '100%',
        paddingTop: 20,
      },
      textTotalContainer: {
        height: 50,
        width: '100%',
        //  backgroundColor: 'red',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        paddingEnd: 10,
        marginTop: 10,
        marginBottom: 60,
      },
      textTotal: {
        color: '#8094FF',
        fontSize: 18,
        fontWeight: 'bold',
      },
      textCalTotal: {
        color: fontColors.subtext,
        fontSize: 18,
      }
});


export default CalorieCalculatorPage;
