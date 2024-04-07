import React from 'react';
import {ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import ProductTable from './productTable';
import creatingDishPageStyles from '../../styles/calorie/creatingDish';
import { generalStyles } from '../../styles/general';
import { mainButtonColors, fontColors, gradientEnd } from '../../styles/general';

const CreatingDishPage = () => {
    const { width: screenWidth } = useWindowDimensions();
  
    return (
        <ScrollView style={[generalStyles.container, { width: screenWidth }]}>
        <View style={generalStyles.equalizer}> 
          <View style={generalStyles.headerSection}>
            <TouchableOpacity style={creatingDishPageStyles.exitButton}>
                <Feather name="chevron-right" size={24} color={fontColors.subtext} />
            </TouchableOpacity>
            <Text style={creatingDishPageStyles.textHeader}>Creating the dish</Text>
          </View>
          <View style={creatingDishPageStyles.contentContainer}>
               <View style={creatingDishPageStyles.dishNameSection}>
                     <View style={creatingDishPageStyles.imageSection}>
                            <View style={creatingDishPageStyles.dishImageContainer}>
                                <Image
                                    source={require('../../assets/images/steak.png')}
                                    style={creatingDishPageStyles.dishImage}
                                    resizeMode="contain"
                                />
                            </View>
                    </View>
                            <TextInput
                                style={creatingDishPageStyles.inputDishName}
                                placeholder="Dish name"
                                // onChangeText={setText}
                                // value={text}
                            />
               </View>
               <View style={creatingDishPageStyles.ingredientsTextSection}>
                    <Text style={creatingDishPageStyles.ingredientsText}>Add ingredients for the dish</Text>
               </View>
               <View style={creatingDishPageStyles.addIngredientection}> 
                    <TextInput
                            style={creatingDishPageStyles.inputProductName}
                            placeholder="Product name"
                            // onChangeText={setText}
                            // value={text}
                        />
                    <TextInput
                            style={creatingDishPageStyles.inputGramm}
                            placeholder="Grams"
                            // onChangeText={setText}
                            // value={text}
                    />
                     <TouchableOpacity style={creatingDishPageStyles.addProductButton}>
                            <LinearGradient
                            colors={[mainButtonColors.firstColor, mainButtonColors.secondColor]}
                            end={gradientEnd}
                            style={creatingDishPageStyles.gradient}
                            >
                              <Feather name="plus" size={26} color={fontColors.button} />
                            </LinearGradient>
                      </TouchableOpacity>
               </View>
               <ProductTable/>
               <View style={creatingDishPageStyles.textTotalContainer}>
                    <Text style={creatingDishPageStyles.textTotal}>Total: </Text>
                    <Text style={creatingDishPageStyles.textCalTotal}>1990 Cal </Text>
                </View>
                <TouchableOpacity style={creatingDishPageStyles.saveButton}>
                    <LinearGradient
                        colors={[mainButtonColors.firstColor, mainButtonColors.secondColor]}
                        end={gradientEnd}
                        style={creatingDishPageStyles.gradient}
                    >
                        <Text style={creatingDishPageStyles.buttonText}>Save to dishes</Text>
                    </LinearGradient>
                </TouchableOpacity>        
          </View>
        </View>
      </ScrollView>
    );
  };


export default CreatingDishPage;