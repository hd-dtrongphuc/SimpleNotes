import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAuthContext } from '~contexts/authContext';
import colors from '~theme/colors';
import LoadingScreen from '~screens/Loading';
import PrivateStack from './PrivateStack';
import PublicStack from './PublicStack';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  Loading: undefined;
  Folder: FolderScreenProps;
};

export type FolderScreenProps = {
  id: string;
};

export const RootStack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  const { isAuthenticated, isLoading } = useAuthContext();

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primaryWhite,
          },
          headerTintColor: colors.d1,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
            color: colors.d1,
          },
          headerShadowVisible: false,
          headerTitleAlign: 'center',
        }}
      >
        {isLoading ? (
          <RootStack.Screen name='Loading' component={LoadingScreen} />
        ) : isAuthenticated && !isLoading ? (
          (() => PrivateStack())()
        ) : (
          (() => PublicStack())()
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
