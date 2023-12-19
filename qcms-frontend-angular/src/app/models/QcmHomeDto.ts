export class QcmHomeDto{
    #id: number;
    #name: string;
    #theme: string;
    constructor(id: number, name: string, theme: string){
        this.#id = id;
        this.#name = name;
        this.#theme = theme;
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
}
