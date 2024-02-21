import { FlashList, ListRenderItem } from '@shopify/flash-list';
import { useCallback } from 'react';
import { View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { Card } from '~/components/atom';
import { JobCard } from '~/components/organisms/JobCard';
import { jobsQuery } from '~/states/jobState';
import { Job } from '~/types/jobs';

export default function Jobs() {
  // get all jobs
  const jobs = useRecoilValue(jobsQuery);

  const renderJobList: ListRenderItem<Job> = useCallback(({ item, index }) => {
    return (
      <Card>
        <JobCard index={index} {...item} />
      </Card>
    );
  }, []);

  const SeparatorComponent = () => <View className="my-2" />;

  return (
    <View className="flex-1 p-4">
      <FlashList
        data={jobs as Job[]}
        showsVerticalScrollIndicator={false}
        keyExtractor={(data) => data.id}
        renderItem={renderJobList}
        estimatedItemSize={50}
        ItemSeparatorComponent={SeparatorComponent}
      />
    </View>
  );
}
