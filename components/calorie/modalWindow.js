// ModalWindow.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import modalWindowStyles from '../../styles/calorie/modalWindow';
import { deleteAllDishes } from '../../services/dishService';

const ModalWindow = ({ isModalVisible, setIsModalVisible, fetchData }) => {

    const handleYesPress = async () => {
        try {
            await deleteAllDishes();
            setIsModalVisible(false); // Закрити модальне вікно
            fetchData(); // Оновити список страв
        } catch (error) {
            console.error('Error deleting all dishes:', error);
        }
    };

    const handleCancelPress = () => {
        setIsModalVisible(false); // Закрити модальне вікно
    };

    if (!isModalVisible) {
        return null; // Якщо модальне вікно не видиме, повернути null
    }

    return(
        <View style={modalWindowStyles.back}>
            <View style={modalWindowStyles.container}>
                <Text style={modalWindowStyles.headText}>Are you sure to delete all dishes?</Text>
                <View style={modalWindowStyles.buttonsSection}>
                    <TouchableOpacity style={modalWindowStyles.button} onPress={handleYesPress}>
                        <Text>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={modalWindowStyles.button} onPress={handleCancelPress}>
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ModalWindow;

