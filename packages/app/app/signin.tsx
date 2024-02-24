import { useSignIn } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FC, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Button, Card, Input, Text } from '~/components/atom';

const SignIn: FC = () => {
  const router = useRouter();
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    setLoading(true);

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });

      await setActive({ session: completeSignIn.createdSessionId });

      // navigate once success login
      router.replace('/(main)/(jobs)');
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <StatusBar style="light" />
      <View className="flex-1 p-4 items-center justify-center bg-purple-600">
        {loading && <ActivityIndicator size="large" color="purple" className="absolute z-10" />}
        <Card className="w-4/5 p-6">
          <Text className="text-purple-600 font-black text-xl text-center">HIRING.</Text>
          <View className="my-5">
            <Text className="font-bold text-xl">Welcome Back</Text>
            <Text>Please enter your details</Text>
          </View>
          <Input
            label="Username"
            placeholder="Username"
            className="mb-2"
            value={emailAddress}
            onChangeText={setEmailAddress}
          />
          <Input
            label="Password"
            placeholder="Password"
            className="mb-2"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Button title="Login" className="mt-5" onPress={onSignInPress} />
        </Card>
      </View>
    </>
  );
};

export default SignIn;
