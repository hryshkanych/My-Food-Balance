import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IntroductionPage from '../components/onboarding/introduction';
import IntroGoalPage from "../components/onboarding/introGoal";

const screens = {
    Introduction: {
        screen: IntroductionPage
    },
    IntroGoal: {
        screen: IntroGoalPage
    }
}

const Stack = createStackNavigator(screens);

export default createAppContainer (Stack);