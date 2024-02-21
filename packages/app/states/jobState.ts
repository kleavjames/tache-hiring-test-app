import { selector, selectorFamily } from 'recoil';

import { client } from '~/lib/trpc';

export const jobsQuery = selector({
  key: 'allJobs',
  get: async () => {
    try {
      const jobs = await client.job.jobList.query();
      return jobs;
    } catch (err) {
      console.error(err);
      return [];
    }
  },
});

export const currentJobQuery = selectorFamily({
  key: 'currentJob',
  get: (jobId: string) => async () => {
    try {
      const job = await client.job.jobById.query({ jobId });
      return job;
    } catch (error) {
      console.error(error);
    }
  },
});
