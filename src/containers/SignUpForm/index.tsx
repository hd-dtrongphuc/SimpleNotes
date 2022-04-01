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

const enum LOGIN_FIELDS {
  email = 'email',
  password = 'password',
  passwordConfirm = 'passwordConfirm',
}

const validationSchema = yup.object({
  [LOGIN_FIELDS.email]: yup
    .string()
    .email('Invalid email address')
    .required('Invalid email address'),
  [LOGIN_FIELDS.password]: yup
    .string()
    .required('Invalid password')
    .min(6, 'Your password is too short'),
  [LOGIN_FIELDS.passwordConfirm]: yup
    .string()
    .oneOf([yup.ref(LOGIN_FIELDS.password), null], 'Passwords must match'),
});

interface FormValues {
  [LOGIN_FIELDS.email]: string;
  [LOGIN_FIELDS.password]: string;
  [LOGIN_FIELDS.passwordConfirm]: string;
}

const SignUpForm = () => {
  const formMethods = useFormProvider<FormValues>({
    validationSchema,
  });
  const passwordRef = useRef<TextInput>(null);
  const passwordConfirmRef = useRef<TextInput>(null);
  const isButtonDisabled = !formMethods.watch(LOGIN_FIELDS.email);
  const navigation = useNavigation();

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit: SubmitHandler<FormValues> = async values => {
    try {
      setError(null);
      setIsLoading(true);
      await auth().createUserWithEmailAndPassword(
        values.email,
        values.password,
      );
    } catch (error) {
      const firebaseError = error as FirebaseError;
      if (firebaseError.code === 'auth/email-already-in-use') {
        setError('The email address is already in use by another account.');
      }
      setIsLoading(false);
    }
  };

  return (
    <View>
      <FormProvider {...formMethods}>
        <FormInput
          name={LOGIN_FIELDS.email}
          placeholder='Email'
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <FormInput
          name={LOGIN_FIELDS.password}
          placeholder='Password'
          secureTextEntry={true}
          onSubmitEditing={() => passwordConfirmRef.current?.focus()}
          ref={passwordRef}
        />
        <FormInput
          name={LOGIN_FIELDS.passwordConfirm}
          placeholder='Confirm password'
          secureTextEntry={true}
          ref={passwordConfirmRef}
        />
      </FormProvider>
      {error && <Text style={styles.error}>{error}</Text>}
      <PrimaryButton
        style={styles.gapBottom}
        disabled={isButtonDisabled}
        onPress={formMethods.handleSubmit(handleSubmit)}
        isLoading={isLoading}
      >
        Sign up
      </PrimaryButton>
      <View style={styles.footer}>
        <Text
          style={{
            color: colors.d1,
          }}
        >
          Do you have an account?
        </Text>
        <Text
          style={{
            color: colors.primary,
            marginLeft: 4,
          }}
          onPress={() => navigation.navigate('Login')}
        >
          Login.
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
    marginBottom: 12,
  },
  footer: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default SignUpForm;
