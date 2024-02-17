import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { NativeModules } from 'react-native';
import type { AppRouter } from 'server';

let scriptHostname;
if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];
}

export const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `http://${scriptHostname}:8000/trpc`,
    }),
  ],
});
