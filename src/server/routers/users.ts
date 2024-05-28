//import { z } from "zod";
import { publicProcedure, router } from "../trpc";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const usersRouter = router({
    getUsers: publicProcedure.query(async () => {
        return prisma.user.findMany()
    }),

});