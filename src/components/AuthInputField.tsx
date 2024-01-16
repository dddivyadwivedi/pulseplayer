import AppInput from '@ui/AppInput';
import colors from '@utils/colors';
import React from 'react';
import {View, Text, StyleSheet, TextInputProps, StyleProp, ViewStyle} from 'react-native';

interface AuthInputProps {
  // Add your component's props here
  placeholder?: string;
  label?: string;
  keybordType? : TextInputProps['keyboardType'];
  autoCapitalize? : TextInputProps['autoCapitalize'];
  secureTextEntry? : boolean;
  containerStyle? : StyleProp<ViewStyle>;
  onChange? : (text:string) => void;
}

const AuthInput: React.FC<AuthInputProps> = props => {
  const {label, placeholder , keybordType , autoCapitalize , secureTextEntry ,containerStyle , onChange} = props;
  return (
    <View style={[styles.container , containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <AppInput placeholder={placeholder} keyboardType={keybordType} autoCapitalize={autoCapitalize} secureTextEntry={secureTextEntry} onChangeText={onChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  label: {
    color: colors.CONTRAST,
  },
});
export default AuthInput;
