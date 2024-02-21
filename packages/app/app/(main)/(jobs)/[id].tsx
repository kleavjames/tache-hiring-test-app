import { Feather } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { Card } from '~/components/atom';
import { currentJobQuery } from '~/states/jobState';

export default function JobDetail() {
  const { id } = useLocalSearchParams();
  const jobDetail = useRecoilValue(currentJobQuery(id as string));

  console.log('JOB DETAIL', jobDetail);

  return (
    <View className="flex-1 p-4">
      <Card>
        <Text className="text-2xl font-medium text-purple-600">React Native Developer</Text>
        <Text className="text-gray-500 mt-10">Posted 1 hour ago</Text>
        <View className="mt-4 gap-4">
          <View className="flex-row">
            <View className="flex basis-10">
              <Feather name="alert-triangle" size={18} color="#a4a4a4" />
            </View>
            <View className="flex-1 pr-10">
              <Text className="text-base">
                Specialize profiles can help you better highlight your expertise when submitting
                resumes / CV to jobs like these
              </Text>
            </View>
          </View>
          <View className="flex-row">
            <View className="flex basis-10">
              <Feather name="map-pin" size={18} color="#a4a4a4" />
            </View>
            <View className="flex-1">
              <Text className="text-base">Remote</Text>
            </View>
          </View>
        </View>
        <View className="mt-10">
          <Text className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Text>
        </View>
        <View>
          <Text>Skill & Expertise</Text>
        </View>
      </Card>
    </View>
  );
}
