import { Router } from "express";
import { EntriesController } from "./controller";


export class EntriesRoutes {
    static get routes(): Router {
        const router = Router()
        const entriesController = new EntriesController()

        router.get("/", entriesController.getAllEntries)
        router.get("/:id", entriesController.getEntryById)
        router.post("/", entriesController.createEntry)
        router.put("/:id", entriesController.updateEntry)
        router.delete("/:id", entriesController.deleteEntry)

        return router
    }
}