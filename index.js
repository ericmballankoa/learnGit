class KaeyrosDeveloper {
    constructor(name, language) {
        this.name = name;
        this.language= language
    }

    heHisKaeyrosDeveloper() {
        return `My name is ${this.name} and I am a ${this.language} developer in Kaeyros`
    }
}

let developer= new KaeyrosDeveloper("Tankeu", "Javascript");

console.log(developer.heHisKaeyrosDeveloper());