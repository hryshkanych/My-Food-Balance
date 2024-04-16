// ModalWindow.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import modalWindowStyles from '../../styles/calorie/modalWindow';
import { deleteAllDishes } from '../../services/dishService';

const ModalWindow = ({ isModalVisible, setIsModalVisible, fetchData }) => {

    const handleYesPress = async () => {
        try {
            await deleteAllDishes();
            setIsModalVisible(false); 
            fetchData(); 
        } catch (error) {
            console.error('Error deleting all dishes:', error);
        }
    };

    const handleCancelPress = () => {
        setIsModalVisible(false);
    };

    if (!isModalVisible) {
        return null; 
    }

    return(
        <View style={modalWindowStyles.back}>
            <View style={modalWindowStyles.container}>
                <Text style={modalWindowStyles.headText}>Are you sure to delete all dishes?</Text>
                <View style={modalWindowStyles.buttonsSection}>
                    <TouchableOpacity style={modalWindowStyles.buttonConfirm} onPress={handleYesPress}>
                        <Text>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={modalWindowStyles.buttonCancle} onPress={handleCancelPress}>
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ModalWindow;

