import React from 'react';
import { View, StyleSheet } from 'react-native';
import IntroductionPage from './components/onboarding/introduction'; 
import IntroGoalPage from './components/onboarding/introGoal';
import IntroMealPage from './components/onboarding/introMeal';
import IntroInspiredPage from './components/onboarding/introInspired';
import HomePage from './components/home/home';
import CalorieCalculatorPage from './components/calorie/calorieCalculator';
import CreatingDishPage from './components/calorie/creatingDish';
import ProductTable from './components/calorie/productTable';

import 'react-native-gesture-handler';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <HomePage></HomePage>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //   <Stack.Screen
    //       name="Introduction"
    //       component={IntroductionPage}
    //       options={{ headerShown: false }} 
    //     />
    //   <Stack.Screen
    //       name="IntroMeal"
    //       component={IntroMealPage}
    //       options={{ headerShown: false }} 
    //     />
    //   <Stack.Screen
    //       name="IntroInspired"
    //       component={IntroInspiredPage}
    //       options={{ headerShown: false }} 
    //     />
    //   <Stack.Screen
    //       name="IntroGoal"
    //       component={IntroGoalPage}
    //       options={{ headerShown: false }} 
    //     />

    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;


