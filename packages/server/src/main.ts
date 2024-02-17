import express, { Application, NextFunction, Request, Response } from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import { createContext } from "./lib/trpc";
import connectDB from "./lib/prisma";
import { appRouter } from "./router";

export type AppRouter = typeof appRouter;

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: createContext,
  })
);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`);
  connectDB();
});
