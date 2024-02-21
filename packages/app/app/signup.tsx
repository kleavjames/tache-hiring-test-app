import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Button, Card, Input, Text } from '~/components/atom';

const SignUp: FC = () => {
  return (
    <>
      <StatusBar style="light" />
      <View className="flex-1 p-4 items-center justify-center bg-purple-600">
        <Card className="w-4/5 p-6">
          <Text className="text-purple-600 font-black text-xl text-center">HIRING.</Text>
          <View className="my-5">
            <Text className="font-bold text-xl">Create Your Account</Text>
            <Text>Please enter details</Text>
          </View>
          <Input label="First Name" placeholder="First name" className="mb-2" />
          <Input label="Last Name" placeholder="Last name" className="mb-2" />
          <Input label="Username" placeholder="Username" className="mb-2" />
          <Input label="Password" placeholder="Password" className="mb-2" />
          <Button title="Sign Up" className="mt-5" />
          <View>
            <Text className="text-center mt-3">
              Already have an account?
              <Link href="/signin" asChild>
                <TouchableOpacity className="pl-1 pt-1">
                  <Text className="text-purple-500">Sign In</Text>
                </TouchableOpacity>
              </Link>
            </Text>
          </View>
        </Card>
      </View>
    </>
  );
};

export default SignUp;
