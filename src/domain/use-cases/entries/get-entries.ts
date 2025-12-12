
import { CreateEntryDto, UpdateEntryDto } from "../../dtos";
import { EntryEntity } from "../../entities/entries/entry.entity";
import { EntryRepository } from "../../repositories/entries/entry.repository";

export interface GetEntriesUseCase {
    execute(): Promise<EntryEntity[]>
}

export class GetEntries implements GetEntriesUseCase {
    constructor(
        private readonly entryRepository: EntryRepository
    ) { }

    execute(): Promise<EntryEntity[]> {
        return this.entryRepository.getAll()
    }
}
