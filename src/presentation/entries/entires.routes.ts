import { Router } from "express";
import { EntriesController } from "./controller";
import { EntryDatasourceImplementation } from "../../infrastructure/datasource/entries/entry.datasource.implementation";
import { EntryRepositoryImplementation } from "../../infrastructure/repositoires/entries/entry.repository.implementation";


export class EntriesRoutes {
    static get routes(): Router {
        const router = Router()

        const datasource = new EntryDatasourceImplementation()
        const repository = new EntryRepositoryImplementation(datasource)

        const entriesController = new EntriesController(repository)

        router.get("/", entriesController.getAllEntries)
        router.get("/:id", entriesController.getEntryById)
        router.post("/", entriesController.createEntry)
        router.put("/:id", entriesController.updateEntry)
        router.delete("/:id", entriesController.deleteEntry)

        return router
    }
}