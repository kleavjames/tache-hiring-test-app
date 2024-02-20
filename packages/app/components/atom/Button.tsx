import { FC } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  title: string;
};

export const Button: FC<ButtonProps> = ({ title, className, ...restProps }) => {
  return (
    <TouchableOpacity {...restProps} className={`bg-purple-600 rounded-lg ${className}`}>
      <Text className="text-white text-center py-4">{title}</Text>
    </TouchableOpacity>
  );
};
