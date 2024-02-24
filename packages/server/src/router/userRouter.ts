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
});
