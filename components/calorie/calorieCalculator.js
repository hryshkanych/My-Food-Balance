import React, { useEffect, useCallback } from 'react';
import { ScrollView, View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import Dish from './dish';
import ModalWindow from './modalWindow';
import calorieCalculatorPageStyles from '../../styles/calorie/calorieCalculator';
import { generalStyles } from '../../styles/general';
import { mainButtonColors, fontColors, gradientEnd } from '../../styles/general';
import { getDishes, deleteAllDishes } from '../../services/dishService'; 

const CalorieCalculatorPage = () => {
    const { width: screenWidth } = useWindowDimensions();
    const navigation = useNavigation();
    const [dishes, setDishes] = React.useState([]);
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const fetchData = async () => {
        try {
            const fetchedDishes = await getDishes();
            setDishes(fetchedDishes);
        } catch (error) {
            console.error('Error fetching dishes:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useFocusEffect(
        useCallback(() => {
            fetchData();
        }, [])
    );

    const navigateToCreatingDishScreen = () => {
        navigation.navigate('CreatingDish'); 
    };

    const handleDeleteAllDishes = () => {
        setIsModalVisible(true);
    };

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <ScrollView style={[generalStyles.container, { width: screenWidth }]}>
            <View style={generalStyles.equalizer}> 
                <View style={generalStyles.headerSection}>
                    <TouchableOpacity style={calorieCalculatorPageStyles.exitButton} onPress={goBack}>
                        <Feather name="chevron-left" size={24} color={fontColors.subtext} />
                    </TouchableOpacity>
                    <Text style={calorieCalculatorPageStyles.textHeader}>Calorie Calculator</Text>
                </View>
                <View style={calorieCalculatorPageStyles.contentContainer}>
                    <View style={calorieCalculatorPageStyles.dishesOprionsSection}>
                        <Text style={calorieCalculatorPageStyles.textSubHeader}>Today`s dishes</Text>
                        <View style={calorieCalculatorPageStyles.dishesButtonsSection}>
                            <TouchableOpacity style={calorieCalculatorPageStyles.dishesButton} onPress={navigateToCreatingDishScreen}>
                                <LinearGradient
                                    colors={[mainButtonColors.firstColor, mainButtonColors.secondColor]}
                                    end={gradientEnd}
                                    style={calorieCalculatorPageStyles.gradient}
                                >
                                    <Feather name="plus" size={26} color={fontColors.button} />
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity style={calorieCalculatorPageStyles.dishesButton} onPress={handleDeleteAllDishes}>
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
                            (dishes.reduce((acc, dish) => {
                                return acc + dish.products.reduce((total, product) => total + product.calories, 0);
                            }, 0)).toFixed(2)
                        } Cal</Text>
                    </View>
                </View>
            </View>
            <ModalWindow
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                fetchData={fetchData}
            />
            
        </ScrollView>
    );
};

export default CalorieCalculatorPage;
