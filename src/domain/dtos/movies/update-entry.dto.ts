export class UpdateEntryDto {
    private constructor(
        public title?: string,
        public synopsis?: string,
        public year?: string,
        public director?: string,
        public actors?: string[],

    ) { }

    get values() {
        const returnObj: { [key: string]: any } = {};

        if (this.title) returnObj.text = this.title
        if (this.synopsis) returnObj.text = this.synopsis
        if (this.year) returnObj.text = this.year
        if (this.director) returnObj.text = this.director
        if (this.actors) returnObj.text = this.actors

        return returnObj
    }

    static create(props: { [key: string]: any }): [string?, UpdateEntryDto?] {
        const { title, synopsis, year, director, actors } = props;

        return [undefined, new UpdateEntryDto(title, synopsis, year, director, actors)]
    }
}