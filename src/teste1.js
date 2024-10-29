
class Alunos {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const alunosB = [
    new Alunos("Mateus", 9),
    new Alunos("Mariani", 8),
    new Alunos("Eduarda", 10),
    new Alunos("Alexandre", 6),
    new Alunos("Lavínia", 5),
    new Alunos("Gustavo", 4)
]

const retornaNotaSeis = () => {
    return alunosB.filter(aluno => aluno.nota >= 6);
}

console.log(retornaNotaSeis());