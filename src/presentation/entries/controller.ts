import { Request, Response } from "express";
import { CreateEntry, CreateEntryDto, DeleteEntry, EntryRepository, GetEntries, GetEntry, UpdateEntry, UpdateEntryDto } from "../../domain";

export class EntriesController {

    constructor(
        private readonly entryResository: EntryRepository
    ) { }

    public getAllEntries = async (req: Request, res: Response) => {
        new GetEntries(this.entryResository)
            .execute()
            .then((entries) => res.json(entries))
            .catch((error) => res.status(400).json({ error }))
    }

    public getEntryById = async (req: Request, res: Response) => {
        const id = +req.params.id

        new GetEntry(this.entryResository)
            .execute(id)
            .then((entry) => res.json(entry))
            .catch((error) => res.status(400).json({ error }))
    }

    public createEntry = async (req: Request, res: Response) => {
        const [error, createEntryDto] = CreateEntryDto.create(req.body)
        if (error) return res.status(400).json({ error })

        new CreateEntry(this.entryResository)
            .execute(createEntryDto!)
            .then((entry) => res.json(entry))
            .catch((error) => res.status(400).json({ error }))

    }

    public updateEntry = async (req: Request, res: Response) => {
        const id = +req.params.id
        const [error, updateEntryDto] = UpdateEntryDto.create({ ...req.body, id })
        if (error) return res.status(400).json({ error })

        new UpdateEntry(this.entryResository)
            .execute(updateEntryDto!)
            .then((entry) => res.json(entry))
            .catch((error) => res.status(400).json({ error }))
    }

    public deleteEntry = async (req: Request, res: Response) => {
        const id = +req.params.id

        new DeleteEntry(this.entryResository)
            .execute(id)
            .then((entry) => res.json(entry))
            .catch((error) => res.status(400).json({ error }))
    }
}