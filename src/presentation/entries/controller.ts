import { Request, Response } from "express";
import { prisma } from "../../data/postgres";

interface Entry {
    title: string;
    content: string;
    author?: string;
    image?: string;
}


export class EntriesController {

    //* DI del repositorio
    constructor(

    ) { }

    public getAllEntries = async (req: Request, res: Response) => {
        const entries = await prisma.entry.findMany()
        return res.status(200).json(entries)
    }

    public getEntryById = async (req: Request, res: Response) => {
        const id = +req.params.id
        if (isNaN(id)) return res.status(400).json({ error: 'ID argument is not a number' })

        const entry = await prisma.entry.findFirst({
            where: { id }
        })

        if (entry) {
            res.status(200).json(entry)
        } else {
            res.status(404).json({ error: `Entry with id ${id} not fount` })
        }

    }

    public createEntry = async (req: Request, res: Response) => {

        const { title, content, author = "Maxi", image = "pecafe.png" } = req.body as Entry

        if (!title) return res.status(400).json({ error: "Title property not found" })
        if (!content) return res.status(400).json({ error: "Content property not found" })

        const newTodo = await prisma.entry.create({
            data: {
                title,
                content,
                author,
                image
            }
        })

        return res.status(201).json(newTodo)
    }

    public updateEntry = async (req: Request, res: Response) => {
        const id = +req.params.id
        if (isNaN(id)) return res.status(400).json({ error: 'ID argument is not a number' })


        const oldEntry = await prisma.entry.findFirst({
            where: { id }
        })

        if (!oldEntry) return res.status(400).json({ error: `Entry with id ${id} not found` })


        const { title, content, author, image } = req.body

        const updatedEntry = await prisma.entry.update({
            where: { id },
            data: {
                title,
                content,
                author,
                image
            }
        })

        return res.status(200).json(updatedEntry)
    }

    public deleteEntry = async (req: Request, res: Response) => {
        const id = +req.params.id
        if (isNaN(id)) return res.status(400).json({ error: 'ID argument is not a number' })

        const oldEntry = await prisma.entry.findFirst({
            where: { id }
        })
        if (!oldEntry) return res.status(400).json({ error: `Entry with id ${id} not found` })

        const deletedEntry = await prisma.entry.delete({
            where: { id }
        })

        if (deletedEntry) {
            res.status(200).json(deletedEntry)
        } else {
            res.status(400).json({ error: `Todo with id ${id} not found` })
        }

        return res.status(200).json({ oldEntry, deletedEntry })
    }
}