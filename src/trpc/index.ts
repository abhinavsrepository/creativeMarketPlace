import { publicProceedure, router } from "./trpcs";

export const appRouter =router ({
    anyApiRoute: publicProceedure.query(()=>{
        return 'hello'
    }),
})

export type AppRouter = typeof appRouter