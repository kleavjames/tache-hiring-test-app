import { selector } from 'recoil';

import { client } from '~/lib/trpc';

export const usersQuery = selector({
  key: 'allUsers',
  get: async () => {
    try {
      const candidates = await client.candidates.getCandidates.query();
      return candidates;
    } catch (err) {
      console.error(err);
      return [];
    }
  },
});
