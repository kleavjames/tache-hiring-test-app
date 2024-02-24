import { z } from "zod";
import { prisma } from "../lib/prisma";
import { publicProcedure, router } from "../lib/trpc";

export const skillsRouter = router({
  getCandidateById: publicProcedure
    .input(
      z.object({
        skillId: z.string(),
      })
    )
    .query(({ input }) => {
      const id = input.skillId;
      return prisma.skills.findUnique({
        where: {
          id,
        },
      });
    }),
});
