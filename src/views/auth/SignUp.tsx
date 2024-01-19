import colors from '@utils/colors';
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  View,
  Button,
} from 'react-native';
import AuthInput from '@components/form/AuthInputField';
import {Formik, validateYupSchema, useFormikContext} from 'formik';
import * as yup from 'yup';
import Form from '@components/form';
import SubmitBtn from '@components/form/SubmitBtn';
interface SignUpProps {
  // Add your component's props here
}
const signUpSchema = yup.object({
  name: yup
    .string()
    .trim('Name is missing')
    .min(3, 'Invalid name!')
    .required('Name is required!'),
  email: yup
    .string()
    .trim('Email is missing')
    .email('Invalid email!')
    .required('Email is required!'),
  password: yup
    .string()
    .trim('Password is missing')
    .min(8, 'Password is too short!')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
      'Password is too simple',
    )
    .required('Password is required!'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignUp: React.FC<SignUpProps> = props => {
  const context = useFormikContext();

  return (
    <SafeAreaView style={styles.container}>
      <Form
        onSubmit={values => {
          console.log(values);
        }}
        initialValues={initialValues}
        validationSchema={signUpSchema}>
        <View style={styles.formContainer}>
          <AuthInput
            placeholder="John Doe"
            label="Name"
            name='name'
            containerStyle={styles.marginBottom}
            // onChange={handleChange('name')}
            // value={values.name}
            // errorMsg={errors.name}
          />
          <AuthInput
            placeholder="john@email.com"
            label="Email"
            name='email'
            keybordType="email-address"
            autoCapitalize="none"
            containerStyle={styles.marginBottom}
    
          />
          <AuthInput
          name='password'
            placeholder="******"
            label="Password"
            autoCapitalize="none"
            secureTextEntry
            containerStyle={styles.marginBottom}
         
          />
         <SubmitBtn title='SignUp'/>
        </View>
      </Form>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 15, // padding in X direction from left and right
  },
  marginBottom: {
    marginBottom: 20,
  },
});
export default SignUp;
