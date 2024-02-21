import { useAuth } from '@clerk/clerk-expo';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import { useCallback } from 'react';
import { View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { Button, Card } from '~/components/atom';
import { JobCard } from '~/components/organisms/JobCard';
import { jobsQuery } from '~/states/jobState';
import { Job } from '~/types/jobs';

// const TEST_DATA: JobList[] = [
//   {
//     id: '1',
//     title: 'Looking for RN Developer',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     expand: false,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     salary: 'PHP 100,000',
//     isOpen: true,
//     skills: [
//       'React Native',
//       'Expo',
//       'Typescript',
//       'Software Development',
//       'Mobile Development',
//       'Android',
//       'iOS',
//     ],
//     location: 'Remote',
//     client: '',
//   },
//   {
//     id: '2',
//     title: 'Senior Software Enginner',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     expand: false,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     salary: 'PHP 150,000 - PHP 300,000',
//     isOpen: true,
//     skills: ['React', 'Node', 'Agile Development', 'Software Development'],
//     location: 'Davao City',
//     client: '',
//   },
// ];

export default function Jobs() {
  const { signOut } = useAuth();
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
      <View>
        <Button title="logout" onPress={() => signOut()} />
      </View>
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