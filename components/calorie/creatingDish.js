import React from 'react';
import {ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import ProductTable from './productTable';

const mainButtonColors = { firstColor: '#92A3FD', secondColor: '#9DCEFF', smallButtonColor: "#EBEEEE"};
const fontColors = { title: '#38232D', subtext: '#7B6F72', placeholder: '#ADA4A5', button: 'white' };
const inputColors = { main: '#F1F1F1', border: '#C4C4C4'};
const gradientEnd = { x: 1, y: 0 };

const CreatingDishPage = () => {
    const { width: screenWidth } = useWindowDimensions();
  
    return (
        <ScrollView style={[calorieCalculatorPageStyles.container, { width: screenWidth }]}>
        <View style={calorieCalculatorPageStyles.equalizer}> 
          <View style={calorieCalculatorPageStyles.headerSection}>
            <TouchableOpacity style={calorieCalculatorPageStyles.exitButton}>
                <Feather name="chevron-right" size={24} color={fontColors.subtext} />
            </TouchableOpacity>
            <Text style={calorieCalculatorPageStyles.textHeader}>Creating the dish</Text>
          </View>
          <View style={calorieCalculatorPageStyles.contentContainer}>
               <View style={calorieCalculatorPageStyles.dishNameSection}>
                     <View style={calorieCalculatorPageStyles.imageSection}>
                            <View style={calorieCalculatorPageStyles.dishImageContainer}>
                                <Image
                                    source={require('../../assets/images/steak.png')}
                                    style={calorieCalculatorPageStyles.dishImage}
                                    resizeMode="contain"
                                />
                            </View>
                    </View>
                            <TextInput
                                style={calorieCalculatorPageStyles.inputDishName}
                                placeholder="Dish name"
                                // onChangeText={setText}
                                // value={text}
                            />
               </View>
               <View style={calorieCalculatorPageStyles.ingredientsTextSection}>
                    <Text style={calorieCalculatorPageStyles.ingredientsText}>Add ingredients for the dish</Text>
               </View>
               <View style={calorieCalculatorPageStyles.addIngredientection}> 
                    <TextInput
                            style={calorieCalculatorPageStyles.inputProductName}
                            placeholder="Product name"
                            // onChangeText={setText}
                            // value={text}
                        />
                    <TextInput
                            style={calorieCalculatorPageStyles.inputGramm}
                            placeholder="Grams"
                            // onChangeText={setText}
                            // value={text}
                    />
                     <TouchableOpacity style={calorieCalculatorPageStyles.addProductButton}>
                            <LinearGradient
                            colors={[mainButtonColors.firstColor, mainButtonColors.secondColor]}
                            end={gradientEnd}
                            style={calorieCalculatorPageStyles.gradient}
                            >
                              <Feather name="plus" size={26} color={fontColors.button} />
                            </LinearGradient>
                      </TouchableOpacity>
               </View>
               <ProductTable/>
               <View style={calorieCalculatorPageStyles.textTotalContainer}>
                    <Text style={calorieCalculatorPageStyles.textTotal}>Total: </Text>
                    <Text style={calorieCalculatorPageStyles.textCalTotal}>1990 Cal </Text>
                </View>
                <TouchableOpacity style={calorieCalculatorPageStyles.saveButton}>
                    <LinearGradient
                        colors={[mainButtonColors.firstColor, mainButtonColors.secondColor]}
                        end={gradientEnd}
                        style={calorieCalculatorPageStyles.gradient}
                    >
                        <Text style={calorieCalculatorPageStyles.buttonText}>Save to dishes</Text>
                    </LinearGradient>
                </TouchableOpacity>
                    
                    
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
      height: 100,// змінити на сталу
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 5,
    //   backgroundColor: 'pink'
    },
    contentContainer: {
      width: '100%',
      flex: 1,
      paddingTop: 30,
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

      dishNameSection: {
        flexDirection: 'row',
        width: '100%',
        height: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'pink'
      },
      imageSection: {
        width: '17%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      dishImageContainer:{
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
      inputDishName: {
        height: 55,
        width: '79%',
        paddingHorizontal: 15,
        backgroundColor: inputColors.main,
        borderRadius: 50,
        fontSize: 16,
        borderWidth: 1,
        borderColor: inputColors.border,
      },
      ingredientsTextSection: {
        marginVertical: 10,
        width: '100%',
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'flex-start'

      },
      ingredientsText: {
        fontSize: 16,
        color: fontColors.title,
      },
      addIngredientection: {
        flexDirection: 'row',
        width: '100%',
        height: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'pink'
      },
      inputProductName: {
        height: 55,
        width: '55%',
        paddingHorizontal: 15,
        backgroundColor: inputColors.main,
        borderRadius: 50,
        fontSize: 16,
        borderWidth: 1,
        borderColor: inputColors.border,
      },
      inputGramm: {
        height: 55,
        width: '25%',
        paddingHorizontal: 15,
        backgroundColor: inputColors.main,
        borderRadius: 50,
        fontSize: 16,
        borderWidth: 1,
        borderColor: inputColors.border,
      },
      addProductButton: {
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: 'green',
      },
      buttonText: {
        color: fontColors.button,
        fontSize: 16,
        fontWeight: 'bold',
      },
      gradient: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      saveButton: {
        width: '100%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:50,
        overflow: 'hidden',
        backgroundColor: 'green',
        marginBottom: 60,
      },
      textTotalContainer: {
        height: 50,
        width: '100%',
        // backgroundColor: 'red',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        paddingEnd: 10,
        marginTop: 10,
        marginBottom: 20
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
    })



export default CreatingDishPage;