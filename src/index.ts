import "../styles/index.scss";

enum HelloPhrases {
    hej,
    hola,
    hello
}
class Greeter {
    helloPhrase: HelloPhrases;
    name: string;

    constructor(name: string, phrase: HelloPhrases) {
        this.helloPhrase = phrase;
        this.name = name;
    }

    toString(): string {
        switch (this.helloPhrase) {
            case HelloPhrases.hej:
                return `Hej ${this.name}`;
            case HelloPhrases.hola:
                return `Hola ${this.name}`;
            default:
                return `Hello ${this.name}`;
        }
    }
}

console.log(new Greeter("Jerry", HelloPhrases.hola));
