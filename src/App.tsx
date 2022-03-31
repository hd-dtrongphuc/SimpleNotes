import React from 'react';
import { AuthProvider } from '~contexts/authContext';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import Navigation from './navigation';

GoogleSignin.configure({
  webClientId:
    '14085469307-lrk38p0jmi0b16avelh0nmgiku2fd3p9.apps.googleusercontent.com',
});

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
