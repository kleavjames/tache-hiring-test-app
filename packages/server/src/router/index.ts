import { router } from "../lib/trpc";
import { jobRouter } from "./jobRouter";

export const appRouter = router({
  job: jobRouter,
});
