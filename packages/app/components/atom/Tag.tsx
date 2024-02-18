import { FC } from 'react';
import { Text, View } from 'react-native';

type TagProps = {
  label: string;
};

export const Tag: FC<TagProps> = ({ label }) => {
  return (
    <View className="border border-purple-300 self-start p-1.5 rounded-lg">
      <Text className="text-purple-500 text-sm">{label}</Text>
    </View>
  );
};
