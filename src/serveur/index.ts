/**
** Router d'application [2]
*/

import prisma from '@/lib/prisma';
//import { userRouter } from './routers/user';
import { procedure, router } from './trpc';


export const appRouter = router({
    // code exporté dans users
    //userRouter
    getUsers: procedure.query(async () => {
        return await prisma.user.findMany()
    }),
    test: procedure.query(()=> {
        return {name: 'test'}
    })
});
 
export type AppRouter = typeof appRouter;