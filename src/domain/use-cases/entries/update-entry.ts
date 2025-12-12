import { CreateEntryDto, UpdateEntryDto } from "../../dtos";
import { EntryEntity } from "../../entities/entries/entry.entity";
import { EntryRepository } from "../../repositories/entries/entry.repository";

export interface UpdateEntryUseCase {
    execute(dto: UpdateEntryDto): Promise<EntryEntity>
}

export class UpdateEntry implements UpdateEntryUseCase {
    constructor(
        private readonly entryRepository: EntryRepository
    ) { }

    execute(dto: UpdateEntryDto): Promise<EntryEntity> {
        return this.entryRepository.updateById(dto)
    }
}
