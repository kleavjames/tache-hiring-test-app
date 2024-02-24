import { selector, selectorFamily } from 'recoil';

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

export const currentCandidateQuery = selectorFamily({
  key: 'currentCandidate',
  get: (userId: string) => async () => {
    try {
      const candidate = await client.candidates.getCandidateById.query({ userId });
      return candidate;
    } catch (error) {
      console.error(error);
    }
  },
});
