import { CreateEntryDto, UpdateEntryDto } from "../dtos";
import { EntryEntity } from "../entities/entries/entry.entity";


export abstract class EntryRepository {
    abstract create(createEntryDto: CreateEntryDto): Promise<EntryEntity>
    abstract getAll(): Promise<EntryEntity[]>
    abstract findById(id: number): Promise<EntryEntity>
    abstract updateById(updateEntryDto: UpdateEntryDto): Promise<EntryEntity>
    abstract deleteById(id: number): Promise<EntryEntity>
}