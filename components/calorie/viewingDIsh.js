import React, { useState, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import ViewProductTable from './viewProductTable';
import viewingDishPageStyles from '../../styles/calorie/viewingDish';
import { generalStyles } from '../../styles/general';
import { mainButtonColors, fontColors, gradientEnd } from '../../styles/general';
import { useRoute } from '@react-navigation/native';
import { getDishById } from '../../services/dishService';

const ViewingDishPage = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { dishId } = route.params;
    const [dishName, setDishName] = useState('');
    const [tableData, setTableData] = useState([]);
    const { width: screenWidth } = useWindowDimensions();

    useEffect(() => {
        const fetchDishData = async () => {
            try {
                const dishData = await getDishById(dishId);
                console.log('Dish data:', dishData);
                setDishName(dishData.name);
                setTableData(dishData.products); // Передача даних про продукти страви в таблицю
            } catch (error) {
                console.error('Error fetching dish data:', error);
            }
        };
        fetchDishData();
    }, [dishId]);

    // Підрахунок загальної кількості калорій
    const calculateTotalCalories = () => {
        let totalCalories = 0;
        tableData.forEach(product => {
            totalCalories += product.calories;
        });
        return totalCalories;
    };

    return (
        <ScrollView style={[generalStyles.container, { width: screenWidth }]}>
            <View style={generalStyles.equalizer}> 
                <View style={generalStyles.headerSection}>
                    <TouchableOpacity style={viewingDishPageStyles.exitButton} onPress={() => navigation.goBack()}>
                        <Feather name="chevron-right" size={24} color={fontColors.subtext} />
                    </TouchableOpacity>
                    <Text style={viewingDishPageStyles.textHeader}>Viewing the dish</Text>
                </View>
                <View style={viewingDishPageStyles.contentContainer}>
                    <View style={viewingDishPageStyles.dishNameSection}>
                        <View style={viewingDishPageStyles.imageSection}>
                            <View style={viewingDishPageStyles.dishImageContainer}>
                                <Image
                                    source={require('../../assets/images/steak.png')}
                                    style={viewingDishPageStyles.dishImage}
                                    resizeMode="contain"
                                />
                            </View>
                        </View>
                        <TextInput
                            editable={false}
                            style={viewingDishPageStyles.inputDishName}
                            placeholder="Dish name"
                            value={dishName}
                        />
                    </View>
                    <ViewProductTable tableData={tableData} /> 
                    <View style={viewingDishPageStyles.textTotalContainer}>
                        <Text style={viewingDishPageStyles.textTotal}>Total: </Text>
                        <Text style={viewingDishPageStyles.textCalTotal}>{calculateTotalCalories()} Cal </Text>
                    </View>
                </View>
            </View> 
        </ScrollView>
    );
};

export default ViewingDishPage;
