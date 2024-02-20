import { FC } from 'react';
import { View, ViewProps } from 'react-native';

export const Card: FC<ViewProps> = ({ children, className, ...restProps }) => {
  return (
    <View className={`${defaultStyles} ${className}`} {...restProps}>
      {children}
    </View>
  );
};

const defaultStyles = 'bg-white rounded-lg p-4';
