import { FC } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';

type InputProps = TextInputProps & {
  label?: string;
  helperText?: string;
};

export const Input: FC<InputProps> = ({ label, className, helperText, ...restProps }) => {
  return (
    <View>
      {label ? <Text className="text-base mb-2">{label}</Text> : null}
      <TextInput
        {...restProps}
        className={`border border-slate-400 p-3 rounded-lg w-auto focus:border-purple-500 ${className}`}
      />
      {helperText ? <Text className="text-gray-400 text-base mt-1">{helperText}</Text> : null}
    </View>
  );
};
