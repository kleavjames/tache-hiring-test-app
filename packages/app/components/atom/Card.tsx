import { FC } from 'react';
import { View } from 'react-native';

type CardProps = {
  children: React.ReactNode;
};

export const Card: FC<CardProps> = ({ children }) => {
  return <View className="bg-white rounded-lg p-4">{children}</View>;
};
