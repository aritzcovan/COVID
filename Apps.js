import "react-native-gesture-handler";
import React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DailyNumbersScreen from "./DailyNumbersScreen";
import CountyNumbersScreen from "./CountyNumbersScreen";
import StatsScreen from "./StatsScreen";
import HomeScreen from "./HomeScreen";
import NewsScreen from "./NewsScreen";
import { SplashScreen } from "expo";

// SplashScreen.preventAutoHide();
// setTimeout(SplashScreen.hide, 5000);

const HomeStack = createStackNavigator();

function Apps() {
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
          name="Home"
          component={HomeScreen}
          options={{ title: "COVID-19 Tracker" }}
        />
        <HomeStack.Screen
          name="Stats"
          component={StatsScreen}
          options={{
            title: "Snapshot"
          }}
        />
        <HomeStack.Screen
          name="DailyNumbers"
          component={DailyNumbersScreen}
          options={{
            title: "Daily Numbers"
          }}
        />
        <HomeStack.Screen
          name="CountyNumbers"
          component={CountyNumbersScreen}
          options={{
            title: "Numbers by County"
          }}
        />
        <HomeStack.Screen
          name="News"
          component={NewsScreen}
          options={{
            title: "News Headlines"
          }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
