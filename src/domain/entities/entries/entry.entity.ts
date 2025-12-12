export class EntryEntity {
    constructor(
        public id: number,
        public title: string,
        public content: string,
        public author?: string,
        public image?: string,
    ) { }

    public static fromObject(object: { [key: string]: any }) {
        const { id, title, content, author, image } = object
        if (!id) throw 'Id is required'
        if (!title) throw 'Title is required'
        if (!content) throw 'Content is required'


        return new EntryEntity(id, title, content, author, image)
    }
}
