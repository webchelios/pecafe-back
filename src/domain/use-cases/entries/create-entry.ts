import { CreateEntryDto } from "../../dtos";
import { EntryEntity } from "../../entities/entries/entry.entity";
import { EntryRepository } from "../../repositories/entries/entry.repository";

export interface CreateEntryUseCase {
    execute(dto: CreateEntryDto): Promise<EntryEntity>
}

export class CreateEntry implements CreateEntryUseCase {
    constructor(
        private readonly entryRepository: EntryRepository
    ) { }

    execute(dto: CreateEntryDto): Promise<EntryEntity> {
        return this.entryRepository.create(dto)
    }
}
