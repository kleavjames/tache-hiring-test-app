import { useAuth, useUser } from '@clerk/clerk-expo';
import { Image } from 'expo-image';
import { View } from 'react-native';

import { Button, Card, Text } from '~/components/atom';

export default function Profile() {
  const { isLoaded: authLoaded, signOut } = useAuth();
  const { user, isLoaded: userLoaded } = useUser();

  console.log(user);

  const logout = () => {
    signOut();
  };

  if (!authLoaded || !userLoaded) {
    return <View />;
  }

  return (
    <View className="flex-1 p-6">
      <Card className="flex-row gap-5">
        <View className="self-center">
          <Image
            style={{ width: 50, height: 50, borderRadius: 50 }}
            source={user?.imageUrl}
            contentFit="cover"
            transition={1000}
          />
        </View>
        <View className="flex gap-5">
          <View className="flex flex-row gap-10 align-items">
            <Text className="text-base basis-15">Name:</Text>
            <Text className="text-base text-purple-600">
              {user?.firstName} {user?.lastName}
            </Text>
          </View>
          <View className="flex flex-row gap-10 align-items">
            <Text className="text-base basis-15">Email:</Text>
            <Text className="text-base text-purple-600">
              {user?.primaryEmailAddress?.emailAddress}
            </Text>
          </View>
          <View className="flex flex-row gap-10 align-items">
            <Text className="text-base basis-15">Phone:</Text>
            <Text className="text-base text-purple-600">
              {user?.primaryPhoneNumber?.phoneNumber || '(none)'}
            </Text>
          </View>
        </View>
      </Card>
      <View className="flex-1  justify-end">
        <Button title="Logout" onPress={logout} />
      </View>
    </View>
  );
}
