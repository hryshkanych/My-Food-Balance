import React from 'react';
import { View, StyleSheet } from 'react-native';
import IntroductionPage from './components/onboarding/introduction'; 
import IntroGoalPage from './components/onboarding/introGoal';
import IntroMealPage from './components/onboarding/introMeal';
import IntroInspiredPage from './components/onboarding/introInspired';
import HomePage from './components/home/home';
import CalorieCalculatorPage from './components/calorie/calorieCalculator';
import CreatingDishPage from './components/calorie/creatingDish';
import ViewingDishPage from './components/calorie/viewingDIsh';
import ProductTable from './components/calorie/productTable';
import DailyRatePage from './components/rate/dailyRate';
import RateResultPage from './components/rate/rateResult';

import 'react-native-gesture-handler';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Introduction"
          component={IntroductionPage}
          options={{ headerShown: false }} 
        />
      <Stack.Screen
          name="IntroGoal"
          component={IntroGoalPage}
          options={{ headerShown: false }} 
        />
      <Stack.Screen
          name="IntroMeal"
          component={IntroMealPage}
          options={{ headerShown: false }} 
        />
      <Stack.Screen
          name="IntroInspired"
          component={IntroInspiredPage}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="ViewingDish"
          component={ViewingDishPage}
          options={{ headerShown: false }} 
        />
      <Stack.Screen
          name="CreatingDish"
          component={CreatingDishPage}
          options={{ headerShown: false }} 
        />
      <Stack.Screen
          name="Calorie"
          component={CalorieCalculatorPage}
          options={{ headerShown: false }} 
        />
      <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }} 
      />
      <Stack.Screen
          name="DailyRate"
          component={DailyRatePage}
          options={{ headerShown: false }} 
      />
       <Stack.Screen
          name="RateResult"
          component={RateResultPage}
          options={{ headerShown: false }} 
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


