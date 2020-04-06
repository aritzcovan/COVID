import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DailyNumbersScreen from "./DailyNumbersScreen";
import CountyNumbersScreen from "./CountyNumbersScreen";
import StatsScreen from "./StatsScreen";
import HomeScreen from "./HomeScreen";
import NewsScreen from "./NewsScreen";
import AboutScreen from './AboutScreen';
import { SplashScreen } from "expo";

SplashScreen.preventAutoHide();
setTimeout(SplashScreen.hide, 2500);

const HomeStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#cc4b1a"
          },
          headerTintColor: "#fff"
        }}
      >
        <HomeStack.Screen
          name="HOME"
          component={HomeScreen}
        />
        <HomeStack.Screen
          name="Stats"
          component={StatsScreen}
          options={{
            title: "SNAPSHOT"
          }}
        />
        <HomeStack.Screen
          name="DailyNumbers"
          component={DailyNumbersScreen}
          options={{
            title: "DAILY COUNTS"
          }}
        />
        <HomeStack.Screen
          name="CountyNumbers"
          component={CountyNumbersScreen}
          options={{
            title: "NUMBERS BY COUNTY"
          }}
        />
        <HomeStack.Screen
          name="News"
          component={NewsScreen}
          options={{
            title: "HEADLINES"
          }}
        />
        <HomeStack.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: "ABOUT"
          }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
