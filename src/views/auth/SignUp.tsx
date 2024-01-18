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
import AuthInput from '@components/AuthInputField';

interface SignUpProps {
  // Add your component's props here
}

const SignUp: React.FC<SignUpProps> = props => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errorInfo, setErrorInfo] = useState({
    name: '',
    email: '',
    password: '',
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <AuthInput
          placeholder="John Doe"
          label="Name"
          containerStyle={styles.marginBottom}
          onChange={text => {
            setUserInfo({...userInfo, name: text});
          }}
          errorMsg={errorInfo.name}
        />
        <AuthInput
          placeholder="john@email.com"
          label="Email"
          keybordType="email-address"
          autoCapitalize="none"
          containerStyle={styles.marginBottom}
          onChange={text => {
            setUserInfo({...userInfo, email: text});
          }}
          errorMsg={errorInfo.email}
        />
        <AuthInput
          placeholder="******"
          label="Password"
          autoCapitalize="none"
          secureTextEntry
          containerStyle={styles.marginBottom}
          onChange={text => {
            setUserInfo({...userInfo, password: text});
          }}
          errorMsg={errorInfo.password}
        />

        <Button
          title="Sign up"
          onPress={() => {
            if (!userInfo.name) {
              return setErrorInfo({
                email : '',
                password : '',
                name: 'Name is missing',
              });
            }
            if (!userInfo.email) {
              return setErrorInfo({
            
                name : '',
                password : '',
                email: 'Email is missing',
              });
            }
            if (!userInfo.password) {
              return setErrorInfo({
                name : '',
                email : '',
                password: 'Password is missing',
              });
            }
          }}
        />
      </View>
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
