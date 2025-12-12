export class UpdateEntryDto {
    private constructor(
        public id: number,
        public title?: string,
        public content?: string,
        public author?: string,
        public image?: string,

    ) { }

    get values() {
        const returnObj: { [key: string]: any } = {};

        if (this.title) returnObj.text = this.title
        if (this.content) returnObj.text = this.content
        if (this.author) returnObj.text = this.author
        if (this.image) returnObj.text = this.image


        return returnObj
    }

    static create(props: { [key: string]: any }): [string?, UpdateEntryDto?] {
        const { title, content, author, image } = props;

        return [undefined, new UpdateEntryDto(title, content, author, image)]
    }
}