import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { client } from '~/lib/trpc';

export default function TabOneScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = async () => {
    await client.job.create.mutate({
      title,
      description,
    });
    setDescription('');
    setTitle('');
  };

  return (
    <View className="items-center flex-1 justify-center gap-4">
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Jot title"
        className="py-4 px-2 border rounded-lg w-96"
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Jot Description"
        className="py-4 px-2 border rounded-lg w-96"
      />
      <TouchableOpacity onPress={onSubmit} className="bg-slate-500 px-2 py-4 rounded-lg mt-5">
        <Text className="text-white min-w-96 text-center">Add Job</Text>
      </TouchableOpacity>
    </View>
  );
}
