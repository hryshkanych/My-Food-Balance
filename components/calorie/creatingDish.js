// CreatingDishPage.js
import React, { useState } from 'react';
import {ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import ProductTable from './productTable';
import creatingDishPageStyles from '../../styles/calorie/creatingDish';
import { generalStyles } from '../../styles/general';
import { mainButtonColors, fontColors, gradientEnd } from '../../styles/general';
import { getProductByName } from '../../services/productService';
import { addDish } from '../../services/dishService';

const CreatingDishPage = () => {
    const navigation = useNavigation();

    const { width: screenWidth } = useWindowDimensions();
    const [dishName, setDishName] = useState('');
    const [productName, setProductName] = useState('');
    const [gramm, setGramm] = useState('');
    const [totalCalories, setTotalCalories] = useState(0);
    const [productTableData, setProductTableData] = useState([]);

    const handleAddProduct = async () => {
        try {
            const product = await getProductByName(productName);
            const caloriesPerGram = product.calories / 1000; // Кількість калорій на один грам
            const calculatedCalories = caloriesPerGram * parseInt(gramm); // Кількість калорій за введену кількість грам
            const newProductData = [productName, gramm, calculatedCalories];
            setProductTableData(prevData => [...prevData, newProductData]);
            setTotalCalories(prevTotalCalories => prevTotalCalories + calculatedCalories);
        } catch (error) {
            console.error('Error fetching the product', error);
        }
    };

    const handleSaveToDishes = async () => {
      try {
          const newDishData = {
              name: dishName,
              products: productTableData.map(product => ({
                  name: product[0],
                  weight: product[1],
                  calories: product[2]
              }))
          };
          await addDish(newDishData);
          setDishName('');
          setProductName('');
          setGramm('');
          setProductTableData([]);
          navigation.goBack();
      } catch (error) {
          console.error('Error saving the dish', error);
      }
  };

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
                            onChangeText={setDishName}
                            value={dishName}
                        />
                    </View>
                    <View style={creatingDishPageStyles.ingredientsTextSection}>
                        <Text style={creatingDishPageStyles.ingredientsText}>Add ingredients for the dish</Text>
                    </View>
                    <View style={creatingDishPageStyles.addIngredientection}> 
                        <TextInput
                            style={creatingDishPageStyles.inputProductName}
                            placeholder="Product name"
                            onChangeText={setProductName}
                            value={productName}
                        />
                        <TextInput
                            style={creatingDishPageStyles.inputGramm}
                            placeholder="Grams"
                            onChangeText={setGramm}
                            value={gramm}
                        />
                        <TouchableOpacity style={creatingDishPageStyles.addProductButton} onPress={handleAddProduct}>
                            <LinearGradient
                                colors={[mainButtonColors.firstColor, mainButtonColors.secondColor]}
                                end={gradientEnd}
                                style={creatingDishPageStyles.gradient}
                            >
                                <Feather name="plus" size={26} color={fontColors.button} />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <ProductTable 
                        tableData={productTableData} 
                        setTableData={setProductTableData} 
                        setTotalCalories={setTotalCalories} 
                        totalCalories={totalCalories} 
                    />
                    <View style={creatingDishPageStyles.textTotalContainer}>
                        <Text style={creatingDishPageStyles.textTotal}>Total: </Text>
                        <Text style={creatingDishPageStyles.textCalTotal}>{totalCalories.toFixed(2).toString()} Cal </Text>
                    </View>
                    <TouchableOpacity style={creatingDishPageStyles.saveButton} onPress={handleSaveToDishes}>
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
