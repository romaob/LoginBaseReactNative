import { DefaultTheme, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Button from './app/src/components/generic/Button';
import Icon from './app/src/components/generic/Icon';
import Access from './app/src/screens/Access';
import AccessResetPassword from './app/src/screens/AccessResetPassword';
import AccessSignIn from './app/src/screens/AccessSignIn';
import AccessSignUp from './app/src/screens/AccessSignUp';

import Home from './app/src/screens/Home';
import Profile from './app/src/screens/Profile';
import User from './app/src/screens/User';
import colors from './app/values/colors';

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
      <StatusBar barStyle="light-content" backgroundColor={colors.background_contrast} />
      <NavigationContainer>
        <Stack.Navigator  
          screenOptions={({navigation}) => ({
            headerStyle: {
              backgroundColor: colors.background_contrast,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button flat style={{padding: 0, margin: 0}} round={25} onPress={() => navigation.navigate('Profile')}>
                <Icon source={require('./app/assets/icon/user_icon.png')} />
              </Button>
            )
          })}          
        >
          <Stack.Screen name="Home" component={Home} options={{
            title: 'Login App!',
            headerLeft: () => {}
          }}/>
          <Stack.Screen name="Profile" component={Profile} options={{
            headerRight: () => {}
          }}/>
          <Stack.Screen name="User" component={User} />
          
          <Stack.Screen name="Access" component={Access} options={{headerShown: false}}/>
          <Stack.Screen name="Signin" component={AccessSignIn} options={{headerShown: false}}/>
          <Stack.Screen name="Signup" component={AccessSignUp} options={{headerShown: false}}/>
          <Stack.Screen name="ResetPassword" component={AccessResetPassword} options={{headerShown: false}}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
