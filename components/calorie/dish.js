import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import DishStyles from '../../styles/calorie/dish';
import { fontColors } from '../../styles/general';
import { deleteDishById } from '../../services/dishService'; // Імпорт сервісу для видалення страви
import { getDishes } from '../../services/dishService';

const Dish = ({ id, name, calories, imageSource, setDishes }) => {

    const handleDeleteDish = async () => {
        try {
            await deleteDishById(id); 
            
            try {
              const fetchedDishes = await getDishes();
              setDishes(fetchedDishes);
           } catch (error) {
              console.error('Error fetching dishes:', error);
            }
        } catch (error) {
            console.error('Error deleting dish:', error);
        }
    };

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
                <TouchableOpacity style={DishStyles.dishesButton} onPress={handleDeleteDish}>
                    <Feather name="trash-2" size={26} color={fontColors.subtext} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Dish;
