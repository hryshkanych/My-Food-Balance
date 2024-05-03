import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput, StyleSheet, useWindowDimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { generalStyles } from '../../styles/general';
import {dailyRatePageStyles, boxStyles} from '../../styles/rate/dailyRate';
import { fontColors, inputColors, mainButtonColors, gradientEnd } from '../../styles/general';
import { SelectList } from 'react-native-dropdown-select-list';


const DailyRatePage = () => {
    const { width: screenWidth } = useWindowDimensions();
    const navigation = useNavigation();

    const navigateToResultRateScreen = ( dailyCalories ) => {
        navigation.navigate('RateResult', { dailyCalories: dailyCalories }); 
    };
    
    const showMessageAlert = (message, description, type) => {
        showMessage({
            message,
            description,
            type,
            duration: 3000,
            position: "top",
        });
    };
    
    const goBack = () => {
        navigation.goBack();
    };

    const [birthdate, setBirthdate] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedGoal, setSelectedGoal] = useState('');
    const [selectedActivityLevel, setSelectedActivityLevel] = useState('');

    const genderData = [
        { key: '1', value: 'Woman' },
        { key: '2', value: 'Man' },
    ];

    const goalData = [
        { key: '1', value: 'Gain Weight' },
        { key: '2', value: 'Maintain Weight' },
        { key: '3', value: 'Lose Weight' },
    ];

    const activityLevelData = [
        { key: '1', value: 'Low' },
        { key: '2', value: 'Medium' },
        { key: '3', value: 'High' },
    ];

    const calculateCalories = () => {
        if (!birthdate || !weight || !height || !selectedGender || !selectedGoal || !selectedActivityLevel) {
            showMessageAlert('Warning', 'All fields are required', 'warning');
            return;
        }
        
        const age = parseInt(birthdate);
        const weightKg = parseFloat(weight);
        const heightM = parseFloat(height) / 100;
    
        let bmr = 0;
    
        if (selectedGender === 'Woman') {
            bmr = 655 + (9.6 * weightKg) + (1.8 * heightM) - (4.7 * age);
        } else if (selectedGender === 'Man') {
            bmr = 66 + (13.7 * weightKg) + (5 * heightM) - (6.8 * age);
        }
    
        let activityFactor = 1;
    
        if (selectedActivityLevel === 'Low') {
            activityFactor = 1.2;
        } else if (selectedActivityLevel === 'Medium') {
            activityFactor = 1.55;
        } else if (selectedActivityLevel === 'High') {
            activityFactor = 1.725;
        }
    
        let goalFactor = 1;
    
        if (selectedGoal === 'Gain Weight') {
            goalFactor = 1.1; 
        } else if (selectedGoal === 'Lose Weight') {
            goalFactor = 0.9; 
        }
    
        const dailyCalories = bmr * activityFactor * goalFactor;

        navigateToResultRateScreen(dailyCalories);
    }

    return (
        <ScrollView style={[generalStyles.container, { width: screenWidth }]}>
            <View style={generalStyles.equalizer}> 
                <View style={generalStyles.headerSection}>
                    <TouchableOpacity style={dailyRatePageStyles.exitButton} onPress={goBack}>
                        <Feather name="chevron-left" size={24} color={fontColors.subtext} />
                    </TouchableOpacity>
                    <Text style={dailyRatePageStyles.textHeader}>Optimal daily rate</Text>
                </View>
                <View style={dailyRatePageStyles.contentContainer}>
                    <Text style={dailyRatePageStyles.textDescription}>Enter the body data for which you need to calculate the optimal daily rate</Text>
                    <View style={dailyRatePageStyles.optionsSection}>  
                        <SelectList 
                            setSelected={(val) => setSelectedGender(val)} 
                            data={genderData} 
                            save="value"
                            placeholder="Select gender"
                            boxStyles={boxStyles}
                        />

                        <TextInput
                            style={dailyRatePageStyles.inputField}
                            placeholder="Enter Age"
                            onChangeText={setBirthdate}
                            value={birthdate}
                            keyboardType="numeric"
                        />

                        <View style={dailyRatePageStyles.inputContainer}>
                            <TextInput
                                style={dailyRatePageStyles.measureField}
                                placeholder="Weight"
                                onChangeText={setWeight}
                                value={weight}
                                keyboardType="numeric"
                            />
                            <View style={dailyRatePageStyles.measurement}>
                                <LinearGradient
                                    colors={['#C58BF2', '#EEA4CE']}
                                    end={gradientEnd}
                                    style={dailyRatePageStyles.gradient}
                                >
                                <Text style={dailyRatePageStyles.buttonText}>KG</Text>
                                </LinearGradient>
                            </View>
                        </View>
                        

                        <View style={dailyRatePageStyles.inputContainer}>
                            <TextInput
                                style={dailyRatePageStyles.measureField}
                                placeholder="Height"
                                onChangeText={setHeight}
                                value={height}
                                keyboardType="numeric"
                            />
                            <View style={dailyRatePageStyles.measurement}>
                                <LinearGradient
                                    colors={['#C58BF2', '#EEA4CE']}
                                    end={gradientEnd}
                                    style={dailyRatePageStyles.gradient}
                                >
                                <Text style={dailyRatePageStyles.buttonText}>CM</Text>
                                </LinearGradient>
                            </View>
                        </View>
                        

                        <SelectList 
                            setSelected={(val) => setSelectedGoal(val)} 
                            data={goalData} 
                            save="value"
                            placeholder="Select goal"
                            boxStyles={boxStyles}
                        />

                        <SelectList 
                            setSelected={(val) => setSelectedActivityLevel(val)} 
                            data={activityLevelData} 
                            save="value"
                            placeholder="Select activity level"
                            boxStyles={boxStyles}
                        />

                        <TouchableOpacity style={dailyRatePageStyles.calculateButton} onPress={calculateCalories}>
                            <LinearGradient
                                colors={[mainButtonColors.firstColor, mainButtonColors.secondColor]}
                                end={gradientEnd}
                                style={dailyRatePageStyles.gradient}
                            >
                                <Text style={dailyRatePageStyles.buttonText}>Calculate</Text>
                            </LinearGradient>
                        </TouchableOpacity>     

                    </View>
                </View>
            </View>
            <FlashMessage position="bottom" />
        </ScrollView>
    );
};

export default DailyRatePage;
