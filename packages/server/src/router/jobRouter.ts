import { prisma } from "../lib/prisma";
import { publicProcedure, router } from "../lib/trpc";
import { z } from "zod";

export const jobRouter = router({
  jobList: publicProcedure.query(() => {
    return prisma.job.findMany();
  }),
  create: publicProcedure
    .input(z.object({ title: z.string(), description: z.string() }))
    .mutation(({ input }) => {
      const title = input.title;
      const description = input.description;

      return prisma.job.create({
        data: {
          title,
          description,
        },
      });
    }),
});
