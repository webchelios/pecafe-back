import { prisma } from "../../../data/postgres";
import { CreateEntryDto, EntryDatasource, EntryEntity, UpdateEntryDto } from "../../../domain";

export class EntryDatasourceImplementation implements EntryDatasource {
    async create(createEntryDto: CreateEntryDto): Promise<EntryEntity> {
        const newEntry = await prisma.entry.create({
            data: createEntryDto
        })

        return EntryEntity.fromObject(newEntry)
    }

    async getAll(): Promise<EntryEntity[]> {
        const entries = await prisma.entry.findMany()

        return entries.map((entry) => {
            return EntryEntity.fromObject(entry)
        })
    }

    async findById(id: number): Promise<EntryEntity> {
        const entry = await prisma.entry.findFirst({
            where: { id }
        })

        if (!entry) throw `Entry with id ${id} not found`

        return EntryEntity.fromObject(entry)
    }

    async updateById(updateEntryDto: UpdateEntryDto): Promise<EntryEntity> {
        await this.findById(updateEntryDto.id)

        const updatedEntry = await prisma.entry.update({
            where: { id: updateEntryDto.id },
            data: updateEntryDto.values
        })

        return EntryEntity.fromObject(updatedEntry)
    }

    async deleteById(id: number): Promise<EntryEntity> {
        await this.findById(id)

        const deletedEntry = await prisma.entry.delete({
            where: { id }
        })

        return EntryEntity.fromObject(deletedEntry)
    }

}