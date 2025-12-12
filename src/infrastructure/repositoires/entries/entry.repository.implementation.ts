import { CreateEntryDto, EntryDatasource, EntryEntity, EntryRepository, UpdateEntryDto } from "../../../domain";

export class EntryRepositoryImplementation implements EntryRepository {

    constructor(
        private readonly entryDatasource: EntryDatasource
    ) { }

    create(createEntryDto: CreateEntryDto): Promise<EntryEntity> {
        return this.entryDatasource.create(createEntryDto)
    }

    getAll(): Promise<EntryEntity[]> {
        return this.entryDatasource.getAll()
    }

    findById(id: number): Promise<EntryEntity> {
        return this.entryDatasource.findById(id)
    }

    updateById(updateEntryDto: UpdateEntryDto): Promise<EntryEntity> {
        return this.entryDatasource.updateById(updateEntryDto)
    }

    deleteById(id: number): Promise<EntryEntity> {
        return this.entryDatasource.deleteById(id)
    }

}