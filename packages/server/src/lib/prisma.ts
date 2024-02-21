import { PrismaClient } from "@prisma/client";
import seed from "../../data/seeder";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

async function connectDB() {
  try {
    await prisma.$connect();
    // await seed();
    console.log("🖥️  Database connected successfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

export default connectDB;
