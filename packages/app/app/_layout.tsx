import { ClerkProvider } from '@clerk/clerk-expo';
import Constants from 'expo-constants';
import { Slot } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { RecoilRoot } from 'recoil';

import '../global.css';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//       <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
//     </Stack>
//   );
// }

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      console.error(err);
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      console.error(err);
    }
  },
};

export default function RootLayout() {
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig?.extra?.clerkPublishableKey}
      tokenCache={tokenCache}>
      <RecoilRoot>
        <Slot />
      </RecoilRoot>
    </ClerkProvider>
  );
}
