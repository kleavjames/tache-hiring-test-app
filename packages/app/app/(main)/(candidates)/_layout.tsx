import { Stack } from 'expo-router';

export default function CandidatesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Candidates',
        }}
      />
      <Stack.Screen name="[id]" options={{ title: 'Candidate Detail' }} />
    </Stack>
  );
}
