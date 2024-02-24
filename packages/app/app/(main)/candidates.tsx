import { Feather } from '@expo/vector-icons';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import { Image } from 'expo-image';
import { Fragment, useCallback } from 'react';
import { View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { Card, Tag, Text } from '~/components/atom';
import { convertPesoFormat } from '~/lib/number';
import { usersQuery } from '~/states/userState';
import { Candidate } from '~/types/candidates';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function TabTwoScreen() {
  // get all candidates
  const candidates = useRecoilValue(usersQuery);

  const renderCandidateItems: ListRenderItem<Candidate> = useCallback(
    ({ item }) => (
      <Card>
        <View className="flex flex-row">
          <View className="self-center mr-2">
            <Image
              style={{ width: 50, height: 50, borderRadius: 50 }}
              source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR8UL026ucyvS5wVb1PPLoYdqVomcqH_M7D5NDYhRo5w&s"
              placeholder={blurhash}
              contentFit="cover"
              transition={1000}
            />
          </View>
          <View className="flex-1 flex-row justify-between">
            <View className="flex-1">
              <Text className="text-xl font-bold">
                {item.firstName} {item.lastName}
              </Text>
              <Text className="text-sm">{item.position}</Text>
              <View className="flex-row mb-2 mt-3 items-start">
                <Feather name="map-pin" size={14} color="#a4a4a4" className="mt-0.5" />
                <Text className="text-base text-gray-500 font-medium ml-2">{item.location}</Text>
              </View>
            </View>
            <View className="bg-purple-100 p-1.5 rounded-lg self-start mt-1.5">
              <Text className="font-bold text-purple-600">
                {convertPesoFormat.format(item.askingSalary!)}
              </Text>
            </View>
          </View>
        </View>

        <View>
          <View className="mt-3">
            <View className="flex flex-row gap-1.5 flex-wrap">
              {item.skills.map((skill) => (
                <Fragment key={skill.id}>
                  <Tag size="small" label={skill.name} />
                </Fragment>
              ))}
            </View>
          </View>
        </View>
      </Card>
    ),
    []
  );

  const SeparatorComponent = () => <View className="my-2" />;

  return (
    <View className="flex-1 p-4">
      <FlashList
        data={candidates as Candidate[]}
        showsVerticalScrollIndicator={false}
        keyExtractor={(data) => data.id}
        ListEmptyComponent={
          <View>
            <Text className="text-center mt-10">No Candidates listed yet. Try to add one</Text>
          </View>
        }
        renderItem={renderCandidateItems}
        estimatedItemSize={50}
        ItemSeparatorComponent={SeparatorComponent}
      />
    </View>
  );
}
