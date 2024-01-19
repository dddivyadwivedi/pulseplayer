import AppInput from '@ui/AppInput';
import colors from '@utils/colors';
import { useFormikContext } from 'formik';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface AuthInputProps {
  // Add your component's props here
  placeholder?: string;
  label?: string;
  name : string;
  value?: string;
  errorMsg?: string;
  keybordType?: TextInputProps['keyboardType'];
  autoCapitalize?: TextInputProps['autoCapitalize'];
  secureTextEntry?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  onChange?: (text: string) => void;
}

const AuthInput: React.FC<AuthInputProps> = props => {
  const {handleChange , values , errors , touched} = useFormikContext<{[key : string] : string}>()

  const {
    label,
    name,
    placeholder,
    keybordType,
    autoCapitalize,
    secureTextEntry,
    containerStyle,
   
  } = props;
  const errorMsg = errors[name]
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.errorMsg}>{errorMsg}</Text>
      </View>
      <AppInput
        placeholder={placeholder}
        keyboardType={keybordType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        onChangeText={handleChange(name)}
        value={values[name]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    color: colors.CONTRAST,
  },
  errorMsg: {
    color: colors.ERROR,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
});
export default AuthInput;
