import { Router } from "express";
import { EntriesRoutes } from "./entries/entires.routes";


export class AppRoutes {
    static get routes(): Router {
        const router = Router()

        router.use("/entries", EntriesRoutes.routes)

        return router
    }
}