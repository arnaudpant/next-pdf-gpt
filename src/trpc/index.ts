import { publicProcedure, router } from './trpc'

export const appRouter = router({
    test: publicProcedure.query(()=> {
        return "OK tprc"
    })
})

export type AppRouter = typeof appRouter