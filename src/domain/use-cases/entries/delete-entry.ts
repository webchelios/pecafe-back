import { EntryEntity } from "../../entities/entries/entry.entity";
import { EntryRepository } from "../../repositories/entries/entry.repository";

export interface DeleteTodoUseCase {
    execute(id: number): Promise<EntryEntity>
}

export class DeleteEntry implements DeleteTodoUseCase {
    constructor(
        private readonly entryRepository: EntryRepository
    ) { }

    execute(id: number): Promise<EntryEntity> {
        return this.entryRepository.deleteById(id)
    }
}
