/**
** Router d'application [2]
*/

import { userRouter } from './routers/user';
import { router } from './trpc';


export const appRouter = router({
    // code exporté dans users
    userRouter
});
 
export type AppRouter = typeof appRouter;