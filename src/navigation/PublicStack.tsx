import React from 'react';

import LoginScreen from '~screens/Login';
import SignUpScreen from '~screens/SignUp';
import { RootStack } from '~navigation';

const PublicStack = () => {
  return (
    <RootStack.Group>
      <RootStack.Screen
        options={{ headerShown: false }}
        name='Login'
        component={LoginScreen}
      />
      <RootStack.Screen
        options={{ headerShown: false }}
        name='SignUp'
        component={SignUpScreen}
      />
    </RootStack.Group>
  );
};

export default PublicStack;
