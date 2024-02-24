import { useRouter } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { useRecoilCallback } from 'recoil';

import { Button, Card, Input, Text } from '~/components/atom';
import { convertPesoFormat } from '~/lib/number';
import { client } from '~/lib/trpc';
import { jobsQuery } from '~/states/jobState';

export default function ModalScreen() {
  const router = useRouter();
  const refreshJobQUery = useRecoilCallback(({ refresh }) => () => {
    refresh(jobsQuery);
  });

  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: '',
      description: '',
      salary: '',
      skills: '',
      location: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await client.job.createJob.mutate({
        title: data.title,
        description: data.description,
        location: data.location,
        salary: data.salary ? +data.salary : null,
        skills: data.skills ? data.skills.split(',') : [],
      });
      refreshJobQUery();
      router.back();
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      contentContainerClassName="flex-1"
      className="flex-1 p-4">
      <View className="h-2 mt-2 rounded-lg mx-auto w-8 bg-gray-500" />
      <View className="mt-5">
        <Card>
          <View className="flex gap-4">
            <View className="mt-2 mb-5">
              <Text className="text-xl font-semibold text-center">Post New Job</Text>
            </View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Title"
                  label="Job Title"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="title"
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Job Description"
                  label="Job description"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  multiline
                  className="h-24"
                />
              )}
              name="description"
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Salary"
                  label="Salary"
                  onBlur={onBlur}
                  keyboardType="numeric"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="salary"
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Skills"
                  label="Skills"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  helperText="Separated by comma"
                />
              )}
              name="skills"
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Location"
                  label="Location"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="location"
            />
            <Button title="Submit" className="mt-5 mb-2" onPress={onSubmit} />
          </View>
        </Card>
      </View>
    </KeyboardAvoidingView>
  );
}
