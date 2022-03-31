import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '~screens/Login';
import { useAuthContext } from '~contexts/authContext';
import HomeScreen from '~screens/Home';
import colors from '~theme/colors';
import SignUpScreen from '~screens/SignUp';
import LoadingScreen from '~screens/Loading';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  Loading: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  const { isAuthenticated, isLoading } = useAuthContext();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.primaryWhite,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
          },
        }}
      >
        {isLoading ? (
          <Stack.Screen name="Loading" component={LoadingScreen} />
        ) : isAuthenticated && !isLoading ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="SignUp"
              component={SignUpScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
