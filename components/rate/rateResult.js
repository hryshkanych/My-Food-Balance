import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput, StyleSheet, useWindowDimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { generalStyles } from '../../styles/general';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import rateResultPageStyles from '../../styles/rate/rateResult';
import { fontColors, inputColors, mainButtonColors, gradientEnd } from '../../styles/general';
import { SelectList } from 'react-native-dropdown-select-list';
import LottieView from 'lottie-react-native';
import { useRoute } from '@react-navigation/native';


const RateResultPage = () => {
    const { width: screenWidth } = useWindowDimensions();
    const navigation = useNavigation();
    const route = useRoute();
    const { dailyCalories } = route.params;


    return (
        <View style={[generalStyles.container, { width: screenWidth }]}>
            <View style={generalStyles.equalizer}> 
                <View style={generalStyles.headerSection}>
                    <TouchableOpacity style={rateResultPageStyles.exitButton}>
                        <Feather name="chevron-right" size={24} color={fontColors.subtext} />
                    </TouchableOpacity>
                    <Text style={rateResultPageStyles.textHeader}>Optimal daily rate</Text>
                </View>
                <View style={rateResultPageStyles.contentContainer}>
                    <View style={rateResultPageStyles.animationContainer}>
                        <LottieView style={{flex: 1, opacity: 0.95}} autoPlay source={require('../../assets/person.json')}></LottieView>
                    </View >
                    <Text style={rateResultPageStyles.textDescription}>     The calorie calculator calculated this result using Harris-Benedict formula. 
                                        This result is only theoretical. To obtain a more accurate result, we recommend consulting 
                                        with a specialist.</Text>
                    <Text style={rateResultPageStyles.textRes}>Your optimal daily rate is: </Text>
                    <Text style={rateResultPageStyles.textCal}>{dailyCalories.toFixed(2).toString()} Cal</Text>
                      
                </View>
            </View>
        </View>
    );
}


export default RateResultPage;

