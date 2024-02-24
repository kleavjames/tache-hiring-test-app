import { prisma } from "../src/lib/prisma";
import jobsJson from "./jobs.json";
import usersJson from "./users.json";

async function seed() {
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
            skill: {
              create: {
                name: skill.name,
              },
            },
          })),
        },
      },
    });
  });

  // add users
  usersJson.map(async (user) => {
    await prisma.user.create({
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        aboutMe: user.aboutMe,
        location: user.location,
        askingSalary: user.askingSalary,
        position: user.position,
        skills: {
          create: user.skills.map((skill) => ({
            skill: {
              create: {
                name: skill.name,
              },
            },
          })),
        },
      },
    });
  });

  console.log("Succesfully seeded data");
}

export default seed;
