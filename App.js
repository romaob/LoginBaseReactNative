import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Access from './app/src/screens/Access';
import AccessSignIn from './app/src/screens/AccessSignIn';
import AccessSignUp from './app/src/screens/AccessSignUp';

import Home from './app/src/screens/Home';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  }
}

const App = () => { 

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Access" component={Access} options={{headerShown: false}}/>
        <Stack.Screen name="Signin" component={AccessSignIn} options={{headerShown: false}}/>
        <Stack.Screen name="Signup" component={AccessSignUp} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
