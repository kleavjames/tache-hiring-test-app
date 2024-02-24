import { router } from "../lib/trpc";
import { jobRouter } from "./jobRouter";
import { skillsRouter } from "./skillsRouter";
import { userRouter } from "./userRouter";

export const appRouter = router({
  job: jobRouter,
  candidates: userRouter,
  skills: skillsRouter,
});
