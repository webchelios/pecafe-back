import { CreateEntryDto, UpdateEntryDto } from "../../dtos";
import { EntryEntity } from "../../entities/entries/entry.entity";
import { EntryRepository } from "../../repositories/entries/entry.repository";

export interface GetEntryUseCase {
    execute(id: number): Promise<EntryEntity>
}

export class GetEntry implements GetEntryUseCase {
    constructor(
        private readonly entryRepository: EntryRepository
    ) { }

    execute(id: number): Promise<EntryEntity> {
        return this.entryRepository.findById(id)
    }
}
