import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { Pressable } from 'react-native';

export default function JobsLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Jobs',
          headerRight: () => {
            return (
              <Pressable onPress={() => router.navigate('createPost')}>
                <Ionicons name="add" size={24} color="purple" />
              </Pressable>
            );
          },
        }}
      />
      <Stack.Screen name="[id]" options={{ title: 'Detail' }} />
    </Stack>
  );
}
