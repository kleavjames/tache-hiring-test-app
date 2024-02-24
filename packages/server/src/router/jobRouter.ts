import { prisma } from "../lib/prisma";
import { publicProcedure, router } from "../lib/trpc";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

export const jobRouter = router({
  jobList: publicProcedure.query(() => {
    return prisma.job.findMany({
      include: {
        skills: true,
      },
    });
  }),
  jobById: publicProcedure
    .input(
      z.object({
        jobId: z.string(),
      })
    )
    .query(({ input }) => {
      const id = input.jobId;
      return prisma.job.findUnique({
        where: {
          id,
        },
        include: {
          skills: true,
        },
      });
    }),
  createJob: publicProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        salary: z.number(),
        skills: z.string().array(),
        location: z.string(),
      })
    )
    .mutation(({ input }) => {
      return prisma.job.create({
        data: {
          title: input.title,
          description: input.description,
          salary: input.salary,
          location: input.location,
          skills: {
            create: input.skills.map((skill) => ({
              skill: {
                create: {
                  name: skill,
                },
              },
            })),
          },
        },
      });
    }),
});
