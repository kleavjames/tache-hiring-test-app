import { prisma } from "../src/lib/prisma";
import jobsJson from "./jobs.json";

async function seed() {
  // delete all data first then seed
  console.log("Deleting all test datas");
  await prisma.job.deleteMany();
  await prisma.skills.deleteMany();
  await prisma.user.deleteMany();

  // add jobs
  jobsJson.map(async (job) => {
    await prisma.job.create({
      data: {
        title: job.title,
        description: job.description,
        location: job.location,
        salary: job.salary,
        skills: {
          create: job.skills.map((skill) => ({
            name: skill,
          })),
        },
      },
    });
  });
  console.log("Succesfully seeded data");
}

export default seed;
