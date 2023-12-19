// id, name, theme, subject, author, nbpoints, questions

class Qcm {

    #id;
    #name;
    #theme;
    #questions;

    constructor(qcmToCreate) {
        this.#id = qcmToCreate.id;
        this.#name = qcmToCreate.name;
        this.#theme = qcmToCreate.theme;
        this.#questions = qcmToCreate.questions;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get theme() {
        return this.#theme;
    }

    get questions() {
        return this.#questions;
    }

    toJSON(key) {
        return {
            id: this.#id,
            name: this.#name,
            theme: this.#theme,
            questions: this.#questions,
        };
    }
}

module.exports = Qcm;