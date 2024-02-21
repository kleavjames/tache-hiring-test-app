import { FC } from 'react';
import { View, ViewProps } from 'react-native';

export const Card: FC<ViewProps> = ({ children, className, ...restProps }) => {
  return (
    <View className={`bg-white rounded-lg p-4 ${className}`} {...restProps}>
      {children}
    </View>
  );
};
