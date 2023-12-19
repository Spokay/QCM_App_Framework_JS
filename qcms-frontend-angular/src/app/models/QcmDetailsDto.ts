import {Question} from "./Question";

export class QcmDetailsDto {
    #id: number;
    #name: string;
    #theme: string;
    #questions: Question[];
    constructor(id: number, name: string, theme: string, questions: Question[]){
        this.#id = id;
        this.#name = name;
        this.#theme = theme;
        this.#questions = questions;
    }

  get id(): number {
    return this.#id;
  }

  set id(value: number) {
    this.#id = value;
  }

  get name(): string {
    return this.#name;
  }

  set name(value: string) {
    this.#name = value;
  }

  get theme(): string {
    return this.#theme;
  }

  set theme(value: string) {
    this.#theme = value;
  }

  get questions(): Question[] {
    return this.#questions;
  }

  set questions(value: Question[]) {
    this.#questions = value;
  }
}
