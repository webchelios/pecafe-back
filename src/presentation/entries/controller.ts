import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateEntryDto, EntryRepository, UpdateEntryDto } from "../../domain";

interface Entry {
    title: string;
    content: string;
    author?: string;
    image?: string;
}


export class EntriesController {

    //* DI del repositorio
    constructor(
        private readonly entryResository: EntryRepository
    ) { }

    public getAllEntries = async (req: Request, res: Response) => {
        const entries = await this.entryResository.getAll()
        res.json(entries)
    }

    public getEntryById = async (req: Request, res: Response) => {
        const id = +req.params.id
        try {
            const entry = await this.entryResository.findById(id)
            res.json(entry)
        } catch (error) {
            res.status(400).json({ error })
        }
    }

    public createEntry = async (req: Request, res: Response) => {
        const [error, createEntryDto] = CreateEntryDto.create(req.body)
        if (error) return res.status(400).json({ error })

        const newEntry = await this.entryResository.create(createEntryDto!)

        return res.json(newEntry)
    }

    public updateEntry = async (req: Request, res: Response) => {
        const id = +req.params.id
        const [error, updateEntryDto] = UpdateEntryDto.create({ ...req.body, id })
        if (error) return res.status(400).json({ error })

        const updatedEntry = await this.entryResository.updateById(updateEntryDto!)

        return res.json(updatedEntry)
    }

    public deleteEntry = async (req: Request, res: Response) => {
        const id = +req.params.id

        const deletedEntry = await this.entryResository.deleteById(id)

        return res.json(deletedEntry)
    }
}