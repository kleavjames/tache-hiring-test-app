import { Stack } from 'expo-router';

export default function JobsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Jobs' }} />
      <Stack.Screen name="[id]" options={{ title: 'Detail' }} />
    </Stack>
  );
}
