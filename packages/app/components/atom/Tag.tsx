import { FC } from 'react';
import { Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { skillQuery } from '~/states/skillState';

type TagProps = {
  label?: string;
  id: string;
  size?: 'default' | 'large' | 'small';
};

export const Tag: FC<TagProps> = ({ id, label, size = 'default' }) => {
  const skill = useRecoilValue(skillQuery(id));
  const textClassname = size === 'default' ? 'text-sm' : size === 'small' ? 'text-xs' : 'text-xl';

  return (
    <View className="border border-purple-300 self-start p-1.5 rounded-lg">
      <Text className={`text-purple-500 ${textClassname}`}>{skill?.name}</Text>
    </View>
  );
};
