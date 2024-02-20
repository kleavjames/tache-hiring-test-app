import { FC } from 'react';
import { Text, TextInput, TextInputProps } from 'react-native';

type InputProps = TextInputProps & {
  label?: string;
};

export const Input: FC<InputProps> = ({ label, className, ...restProps }) => {
  return (
    <>
      {label ? <Text className="text-base mb-2">{label}</Text> : null}
      <TextInput
        {...restProps}
        className={`border border-slate-400 p-3 rounded-lg w-auto focus:border-purple-500 ${className}`}
      />
    </>
  );
};
