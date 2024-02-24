import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { FC, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { Tag } from '../atom';

import { Job } from '~/types/jobs';
import { relativeDate } from '~/utils/dates';
import { convertPesoFormat } from '~/lib/number';

type JobCardProps = Job & {
  index: number;
};

export const JobCard: FC<JobCardProps> = ({
  title,
  salary,
  location,
  description,
  skills,
  updatedAt,
  id,
}) => {
  const [expand, setExpand] = useState(false);

  const renderDescription = useMemo(
    () => (expand ? description : description.substring(0, 120)),
    [expand]
  );

  const onExpand = () => {
    setExpand(!expand);
  };

  return (
    <>
      <View className="gap-4">
        <Link href={`/(main)/(jobs)/${id}`}>
          <View className="gap-4">
            <View>
              <Text className="text-gray-500 text-xs mb-1">{relativeDate(updatedAt)}</Text>
              <Text className="text-2xl font-medium text-purple-600">{title}</Text>
            </View>
            <View className="self-start gap-2">
              <View className="bg-purple-100 p-1.5 rounded-lg self-start">
                <Text className="font-bold text-purple-600">
                  {convertPesoFormat.format(salary!)}
                </Text>
              </View>
              <View className="flex-row items-center gap-1.5">
                <Feather name="map-pin" size={14} color="#a4a4a4" />
                <Text className="text-sm text-gray-500 font-medium">{location}</Text>
              </View>
            </View>
          </View>
        </Link>
        <Text className="text-lg text-gray-500">
          {renderDescription}{' '}
          <Pressable onPress={onExpand}>
            <Text className="text-purple-600">{expand ? 'Less' : 'More'}</Text>
          </Pressable>
        </Text>
        <View className="flex-row gap-2 flex-wrap">
          {skills.map((skill) => (
            <Tag key={skill.skillId} id={skill.skillId} />
          ))}
        </View>
      </View>
    </>
  );
};
