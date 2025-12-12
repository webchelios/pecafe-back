export class CreateEntryDto {
    private constructor(
        public title: string,
        public content: string,
        public author?: string,
        public image?: string,

    ) { }

    static create(props: { [key: string]: any }): [string?, CreateEntryDto?] {
        const { title, content, author, image } = props;

        if (!title) return ['Title property is required', undefined];
        if (!content) return ['Content property is required', undefined];
        if (!author) return ['Author property is required', undefined];
        if (!image) return ['Image property is required', undefined];

        return [undefined, new CreateEntryDto(title, content, author, image)]
    }
}