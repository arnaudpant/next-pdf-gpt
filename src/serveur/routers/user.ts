import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
import { procedure, router } from '../trpc';
//import { z } from "zod"


export const userRouter = router({
    getUsers: procedure.query( async () => {
        return await prisma.user.findMany()
    }),
});

// const createContext = ({
//     event,
//     context,
// }: CreateAWSLambdaContextOptions<APIGatewayProxyEventV2>) => ({}) // no context
// type Context = Awaited<ReturnType<typeof createContext>>;
// export const handler = awsLambdaRequestHandler({
//     router: appRouter,
//     createContext,
// })
