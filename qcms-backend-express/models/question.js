class Question{
    #question;
    #answers;
    constructor(question, answers){
        this.question = question;
        this.answers = answers;
    }
    get question(){
        return this.#question;
    }
    get answers(){
        return this.#answers;
    }

    toJSON(key){
        return {
            question: this.#question,
            answers: this.#answers
        };
    }
}