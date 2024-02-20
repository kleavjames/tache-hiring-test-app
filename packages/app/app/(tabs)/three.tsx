import { TouchableOpacity, View } from 'react-native';

import { Button, Card, Input, Text } from '~/components/atom';

const Three = () => {
  return (
    <View className="flex-1 p-4 items-center justify-center">
      <Card className="w-4/5 p-6">
        <Text className="text-purple-600 font-black text-3xl text-center">HIRING.</Text>
        <View className="my-5">
          <Text className="font-bold text-xl">Welcome back</Text>
          <Text>Please enter your details</Text>
        </View>
        <Input label="Username" placeholder="Username" className="mb-4" />
        <Input label="Password" placeholder="Password" className="mb-4" />
        <Button title="Login" className="mt-5" />
        <View>
          <Text className="text-center mt-3">
            Don't you have an account?
            <TouchableOpacity className="pl-1 pt-1">
              <Text className="text-purple-500">Sign Up</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </Card>
      <Text className="mt-2 text-sm">Copyright 2024. Built with ❤️</Text>
    </View>
  );
};

export default Three;
