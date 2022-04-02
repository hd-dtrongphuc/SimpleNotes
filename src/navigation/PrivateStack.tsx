import React from 'react';

import { RootStack } from '~navigation';
import HomeHeader from '~components/Header/HomeHeader';
import HomeScreen from '~screens/Home';

const PrivateStack = () => {
  return (
    <RootStack.Group>
      <RootStack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerTitle: props => <HomeHeader {...props} title='Folders' />,
        }}
      />
    </RootStack.Group>
  );
};

export default PrivateStack;
