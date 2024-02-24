import { selectorFamily } from 'recoil';

import { client } from '~/lib/trpc';

export const skillQuery = selectorFamily({
  key: 'skill',
  get: (skillId: string) => async () => {
    try {
      const skill = await client.skills.getCandidateById.query({ skillId });
      return skill;
    } catch (error) {
      console.error(error);
    }
  },
});
