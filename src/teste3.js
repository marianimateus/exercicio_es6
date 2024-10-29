class Alunos {
    #nome;
    #nota;

    constructor(nome, nota){
        this.#nome = nome;
        this.#nota = nota; 
    }

    getNome() {
        return this.#nome;
    }

    getNota(){
        return this.#nota;
    }
}

class Mateus extends Alunos {
    constructor(){
        super("Mateus", 0.5)
    }
}

class Mariani extends Alunos {
    constructor(){
        super("Mariani", 6)
    }
}

class Zanatta extends Alunos {
    constructor(){
        super("Zanatta", 9)
    }
}

class Eduarda extends Alunos {
    constructor(){
        super("Eduarda", 5)
    }
}

class Alexandre extends Alunos {
    constructor(){
        super("Alexandre", 7)
    }
}

class Lavinia extends Alunos {
    constructor(){
        super("Lavínia", 8)
    }
}

const alunosB = [
    new Mateus(),
    new Mariani(),
    new Zanatta(),
    new Eduarda(),
    new Alexandre(),
    new Lavinia()
];

const retornaNotaSeisOuMais = () => {
    return alunosB.filter(aluno => aluno.getNota() >= 6);
};

const exibirAlunosAprovados = () => {
    const alunosAprovados = retornaNotaSeisOuMais();
    const successMessage = "Os seguintes alunos passaram no teste:";
    const failMessage = "Os seguintes alunos não passaram no teste";
    if(alunosAprovados.length > 0) {
        console.log(successMessage);
        alunosAprovados.forEach(aluno => {
            console.log(`Nome: ${aluno.getNome()}, Nota: ${aluno.getNota()}.`)
        });
    } else {
        console.log(failMessage);
    }
}

exibirAlunosAprovados();