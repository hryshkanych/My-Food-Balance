import React, { useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Dish from './dish';
import calorieCalculatorPageStyles from '../../styles/calorie/calorieCalculator';
import { generalStyles } from '../../styles/general';
import { mainButtonColors, fontColors, gradientEnd } from '../../styles/general';
import { getDishes } from '../../services/dishService';

const CalorieCalculatorPage = () => {
    const { width: screenWidth } = useWindowDimensions();
    const navigation = useNavigation();
    const [dishes, setDishes] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedDishes = await getDishes();
                setDishes(fetchedDishes);
            } catch (error) {
                console.error('Error fetching dishes:', error);
            }
        };
        fetchData();
    }, []);

    const navigateToNextScreen = () => {
        navigation.navigate('CreatingDish'); 
    };

    return (
        <ScrollView style={[generalStyles.container, { width: screenWidth }]}>
            <View style={generalStyles.equalizer}> 
                <View style={generalStyles.headerSection}>
                    <TouchableOpacity style={calorieCalculatorPageStyles.exitButton}>
                        <Feather name="chevron-right" size={24} color={fontColors.subtext} />
                    </TouchableOpacity>
                    <Text style={calorieCalculatorPageStyles.textHeader}>Calorie Calculator</Text>
                </View>
                <View style={calorieCalculatorPageStyles.contentContainer}>
                    <View style={calorieCalculatorPageStyles.dishesOprionsSection}>
                        <Text style={calorieCalculatorPageStyles.textSubHeader}>Today`s dishes</Text>
                        <View style={calorieCalculatorPageStyles.dishesButtonsSection}>
                            <TouchableOpacity style={calorieCalculatorPageStyles.dishesButton} onPress={navigateToNextScreen}>
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
                        {dishes.map((dish, index) => (
                            <Dish 
                                key={index}
                                id = {dish._id}
                                name={dish.name}
                                calories={dish.products.reduce((acc, product) => acc + product.calories, 0)}
                                imageSource={require('../../assets/images/food-tray.png')}
                                setDishes={setDishes} // Передача функції для оновлення страв
                            />
                        ))}
                    </View>
                    <View style={calorieCalculatorPageStyles.textTotalContainer}>
                        <Text style={calorieCalculatorPageStyles.textTotal}>Total: </Text>
                        <Text style={calorieCalculatorPageStyles.textCalTotal}>{
                            dishes.reduce((acc, dish) => {
                                return acc + dish.products.reduce((total, product) => total + product.calories, 0);
                            }, 0)
                        } Cal</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default CalorieCalculatorPage;
