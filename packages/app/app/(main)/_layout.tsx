import { useAuth } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function MainLayout() {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    if (!isSignedIn && isLoaded) {
      router.replace('/signin');
    }
  }, [isSignedIn]);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'purple',
      }}>
      <Tabs.Screen
        name="(jobs)"
        options={{
          headerShown: false,
          title: 'Jobs',
          tabBarIcon: ({ color }) => <Ionicons name="briefcase-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="candidates"
        options={{
          title: 'Candidates',
          tabBarIcon: ({ color }) => <Ionicons name="people-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons name="id-card-outline" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
