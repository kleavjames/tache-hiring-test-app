import { FC } from 'react';
import { Text, View } from 'react-native';

type TagProps = {
  label: string;
  size?: 'default' | 'large';
};

export const Tag: FC<TagProps> = ({ label, size = 'default' }) => {
  const textClassname = size === 'default' ? 'text-sm' : 'text-xl';

  return (
    <View className="border border-purple-300 self-start p-1.5 rounded-lg">
      <Text className={`text-purple-500 ${textClassname}`}>{label}</Text>
    </View>
  );
};
