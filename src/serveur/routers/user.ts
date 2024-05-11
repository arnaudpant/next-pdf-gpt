import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
import { procedure, router } from '../trpc';


export const userRouter = router({
    getUsers: procedure.query(async () => {
        return await prisma.user.findMany()
    }),
});