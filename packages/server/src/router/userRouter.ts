import { z } from "zod";
import { prisma } from "../lib/prisma";
import { publicProcedure, router } from "../lib/trpc";

export const userRouter = router({
  getCandidates: publicProcedure.query(() => {
    return prisma.user.findMany({
      include: {
        skills: true,
      },
    });
  }),
  getCandidateById: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .query(({ input }) => {
      const id = input.userId;
      return prisma.user.findUnique({
        where: {
          id,
        },
        include: {
          skills: true,
        },
      });
    }),
});
