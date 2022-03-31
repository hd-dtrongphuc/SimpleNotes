import React, { useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { FormProvider, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

import FormInput from '~components/Form/FormInput';
import useFormProvider from '~hooks/useFormProvider';
import type { FirebaseError } from '~types';
import colors from '~theme/colors';
import PrimaryButton from '~components/Button/PrimaryButton';
import useAuthMethods from '~hooks/useAuthMethods';

const enum LOGIN_FIELDS {
  email = 'email',
  password = 'password',
}

const validationSchema = yup.object({
  [LOGIN_FIELDS.email]: yup
    .string()
    .email('Invalid email address')
    .required('Invalid email address'),
  [LOGIN_FIELDS.password]: yup.string().required('Invalid password'),
});

interface FormValues {
  [LOGIN_FIELDS.email]: string;
  [LOGIN_FIELDS.password]: string;
}

const LoginForm = () => {
  const formMethods = useFormProvider<FormValues>({
    validationSchema,
  });
  const passwordRef = useRef<TextInput>(null);
  const isButtonDisabled = !formMethods.watch(LOGIN_FIELDS.email);
  const navigation = useNavigation();
  const { onGoogleSignIn } = useAuthMethods();

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSignInWithGoogleLoading, setIsSignInWithGoogleLoading] =
    useState<boolean>(false);

  const handleSubmit: SubmitHandler<FormValues> = async values => {
    try {
      setIsLoading(true);
      setError(null);
      await auth().signInWithEmailAndPassword(values.email, values.password);
    } catch (error) {
      const firebaseError = error as FirebaseError;
      if (
        firebaseError.code === 'auth/user-not-found' ||
        firebaseError.code === 'auth/wrong-password'
      ) {
        setError('Email or password is incorrect');
      }
      setIsLoading(false);
    }
  };

  const onGoogleButtonPress = async () => {
    try {
      setError(null);
      setIsSignInWithGoogleLoading(true);
      await onGoogleSignIn();
    } catch (error) {
      console.log(error);
      setError('Something went wrong');
      setIsSignInWithGoogleLoading(false);
    }
  };

  return (
    <View>
      <FormProvider {...formMethods}>
        <FormInput
          name={LOGIN_FIELDS.email}
          placeholder="Email"
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <FormInput
          name={LOGIN_FIELDS.password}
          placeholder="Password"
          secureTextEntry={true}
          ref={passwordRef}
        />
      </FormProvider>
      {error && <Text style={styles.error}>{error}</Text>}
      <PrimaryButton
        disabled={isButtonDisabled}
        onPress={formMethods.handleSubmit(handleSubmit)}
        isLoading={isLoading}>
        Login
      </PrimaryButton>
      <View style={[styles.horizontal, styles.gapTop, styles.gapBottom]}>
        <View style={styles.divider}></View>
        <Text style={{ color: colors.d1 }}>OR</Text>
        <View style={styles.divider}></View>
      </View>
      <PrimaryButton
        onPress={onGoogleButtonPress}
        isLoading={isSignInWithGoogleLoading}>
        Login with Google
      </PrimaryButton>
      <View style={styles.footer}>
        <Text
          style={{
            color: colors.d1,
          }}>
          {"Don't have an account?"}
        </Text>
        <Text
          style={{
            color: colors.primary,
            marginLeft: 4,
          }}
          onPress={() => navigation.navigate('SignUp')}>
          Sign Up.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: colors.r1,
    marginTop: 2,
    marginBottom: 12,
    fontStyle: 'italic',
    marginLeft: 4,
  },
  gapBottom: {
    marginBottom: 16,
  },
  gapTop: {
    marginTop: 16,
  },
  footer: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  divider: {
    borderTopWidth: 1,
    borderTopColor: colors.g1,
    height: 1,
    width: '40%',
    marginHorizontal: 8,
  },
  horizontal: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginForm;
