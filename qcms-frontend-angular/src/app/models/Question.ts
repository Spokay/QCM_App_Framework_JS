import {Answer} from "./Answer";

export class Question {
    id: number;
    title: string;
    answers: Answer[];
    constructor(id: number, title: string, answers: Answer[]){
        this.id = id;
        this.title = title;
        this.answers = answers;
    }
}
