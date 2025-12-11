import { Request, Response } from "express";
import { prisma } from "../../data/postgres";

interface Entry {
    _id: string;
    title: string;
    content: string;
    author: string;
    image?: string;
    status?: boolean;
}

const entries: Entry[] = [
    {
        _id: "1",
        title: "Bienvenidos",
        content: "Esta es mi cafeteria queda en Longchamps",
        author: "Maxi",
        image: "pecafe.png",
        status: true
    },
    {
        _id: "2",
        title: "Top mundial",
        content: "Mi cafeteria esta en el top",
        author: "Maxi",
        image: "top.png",
        status: true
    }
]

export class EntriesController {

    //* DI del repositorio
    constructor(

    ) { }

    public getAllEntries = (req: Request, res: Response) => {
        return res.status(200).json(entries)
    }

    public getEntryById = (req: Request, res: Response) => {
        const id = req.params.id

        const result = entries.find((entry) => {
            return entry._id === id
        })

        if (result) {
            res.status(200).json(result)
        } else {
            res.status(404).json({ error: `Entry with id ${id} not fount` })
        }

    }

    public createEntry = async (req: Request, res: Response) => {

        const { title, content, author, image } = req.body as Entry

        if (!title) return res.status(400).json({ error: "Title property not found" })
        if (!content) return res.status(400).json({ error: "Content property not found" })

        const newTodo = await prisma.entry.create({
            data: { title, content, author, image }
        })

        return res.status(201).json(newTodo)
    }

    public updateEntry = (req: Request, res: Response) => {
        const id = req.params.id


        const oldEntry = entries.find((entry) => {
            return entry._id === id
        })

        if (!oldEntry) return res.status(400).json({ error: `Entry with id ${id} not found` })


        const { title, content, author, image } = req.body

        oldEntry.title = title || oldEntry.title
        oldEntry.content = content || oldEntry.content
        oldEntry.author = author || oldEntry.author
        oldEntry.image = image || oldEntry.image

        return res.status(200).json(oldEntry)
    }

    public deleteEntry = (req: Request, res: Response) => {
        const id = req.params.id

        const oldEntry = entries.find((entry) => {
            return entry._id === id
        })
        if (!oldEntry) return res.status(400).json({ error: `Entry with id ${id} not found` })

        oldEntry.status = false

        return res.status(200).json(oldEntry)
    }
}