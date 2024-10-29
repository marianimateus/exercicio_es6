class Alunos {
    constructor(nome, nota){
        this.nome = nome;
        this.nota = nota; 
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

const notaFinal = [
    new Mateus(),
    new Mariani(),
    new Zanatta(),
    new Eduarda(),
    new Alexandre(),
    new Lavinia()
]

const retornaNotaSeis = () => {
    return notaFinal.filter(alunos => alunos.nota >= 6)
}

const success = "Os seguintes alunos passaram no teste:"

console.log(success, retornaNotaSeis());