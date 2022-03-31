import React, { createContext, useContext, useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface AuthContextState {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: FirebaseAuthTypes.User | null;
}

const initialState: AuthContextState = {
  isLoading: true,
  isAuthenticated: false,
  user: null,
};

const AuthContext = createContext<AuthContextState>(initialState);

const AuthProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const onAuthStateChanged = (userState: FirebaseAuthTypes.User | null) => {
    setUser(userState);

    setIsAuthenticated(userState !== null);
    if (isLoading) setIsLoading(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isAuthenticated,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuthContext };
