import { FC } from 'react';
import { Text as RNText, TextProps } from 'react-native';

export const Text: FC<TextProps> = ({ children, className, ...restProps }) => {
  return (
    <RNText className={`text-base text-gray-500 ${className}`} {...restProps}>
      {children}
    </RNText>
  );
};
