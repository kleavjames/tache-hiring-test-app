import { router } from "../lib/trpc";
import { jobRouter } from "./jobRouter";
import { userRouter } from "./userRouter";

export const appRouter = router({
  job: jobRouter,
  candidates: userRouter,
});
