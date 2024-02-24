import { Feather } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { Card, Tag } from '~/components/atom';
import { convertPesoFormat } from '~/lib/number';
import { currentCandidateQuery } from '~/states/userState';

export default function CandidateDetail() {
  const { id } = useLocalSearchParams();
  const candidateDetail = useRecoilValue(currentCandidateQuery(id as string));

  if (!candidateDetail) {
    return null;
  }

  return (
    <ScrollView className="flex-1 p-4">
      <Card className="mb-8">
        <Text className="text-3xl font-medium text-purple-600 mt-2">
          {candidateDetail.firstName} {candidateDetail.lastName}
        </Text>
        <View className="bg-purple-100 p-1.5 rounded-lg self-start mt-2">
          <Text className="font-bold text-lg text-purple-600">
            {convertPesoFormat.format(candidateDetail.askingSalary!)}
          </Text>
        </View>
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
              <Text className="text-base">{candidateDetail.location}</Text>
            </View>
          </View>
        </View>
        <View className="mt-10">
          <Text className="font-bold text-purple-500 text-xl mb-3">Description</Text>
          <Text className="text-lg text-gray-500">{candidateDetail.aboutMe}</Text>
        </View>
        <View className="mt-5">
          <Text className="font-bold text-purple-500 text-xl">Skill & Expertise</Text>
        </View>
        <View className="flex-row flex-wrap gap-2 mt-5">
          {candidateDetail.skills.map((skill) => {
            return <Tag size="large" key={skill.skillId} id={skill.skillId} />;
          })}
        </View>
      </Card>
    </ScrollView>
  );
}
