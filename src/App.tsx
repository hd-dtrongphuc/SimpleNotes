import React from 'react';
import { AuthProvider } from '~contexts/authContext';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import Navigation from './navigation';
import { store } from '~reducers/store';
import { LogBox } from 'react-native';

GoogleSignin.configure({
  webClientId:
    '14085469307-lrk38p0jmi0b16avelh0nmgiku2fd3p9.apps.googleusercontent.com',
});

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default App;
