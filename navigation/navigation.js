// AppNavigator.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogoPage from '../components/LogoPage';
import WelcomePage from '../components/WelcomePage';
import RegisterComponent from '../components/RegisterComponent';
import LoginComponent from '../components/LoginComponent';
import EventComponent from '../components/EventComponent';



const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogoPage" headerMode="none">
        <Stack.Screen name="LogoPage" component={LogoPage} />
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="SignUp" component={RegisterComponent} />
        <Stack.Screen name="SignIn" component={LoginComponent} />
        <Stack.Screen name="EventComponent" component={EventComponent} />



      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
