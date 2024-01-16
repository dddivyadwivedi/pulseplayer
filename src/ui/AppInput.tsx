import colors from '@utils/colors';
import React from 'react';
import { TextInputProps, Text, StyleSheet, TextInput } from 'react-native';

interface AppInputProps extends TextInputProps {
  // Add your component's props here

}

const AppInput: React.FC<AppInputProps> = (props) => {
  return (
    <TextInput
    {...props}
    style={[styles.input , props.style]}
    placeholderTextColor={colors.INACTIVE_CONTRAST}
  />
  );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: colors.SECONDARY,
        height: 45,
        borderRadius: 22.5,
        color: colors.CONTRAST,
        padding: 10,
      },
})
export default AppInput;
