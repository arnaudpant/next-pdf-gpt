//import { auth } from '../../auth';
import { usersRouter } from './routers/users';
import { router } from './trpc';

export const appRouter = router({
    users: usersRouter,
    // userList: publicProcedure
    //     .query(async () => {
    //         try {
    //             const session = await auth();
    //             const user = session?.user
    //             return user;
    //         } catch {
    //             throw new Error("PAS DE AUTH")
    //         }
    //     }),
});


export type AppRouter = typeof appRouter;