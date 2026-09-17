const curso = {
    nome: "React",
    cargaHoraria: 112,
    nivel: "Iniciante",
    ativo: true,
    instrutor: "Igor M"
};

const modulos = [
    "Fundamentos",
    "Componentes",
    "Props",
    "JavaScript",
    "Estado"
];

const alunos = [
    {
        nome: "Ana",
        idade: 20,
        ativo: true
    },
    {
        nome: "Lucas",
        idade: 22,
        ativo: true
    },
    {
        nome: "Marina",
        idade: 19,
        ativo: false
    }
];

function DadosCurso() {
    return (
        <section className="dados-curso">
            <h2>{curso.nome}</h2>

            <p>Carga horária: {curso.cargaHoraria}h</p>
            <p>Nível: {curso.nivel}</p>
            <p>Instrutor: {curso.instrutor}</p>

            <h3>Módulos</h3>
            <p>{modulos[0]}</p>
            <p>{modulos[1]}</p>
            <p>{modulos[2]}</p>
            <p>Total de módulos: {modulos.length}</p>

            <h3>Alunos</h3>
            <p>Aluno 1: {alunos[0].nome}</p>
            <p>Idade: {alunos[0].idade}</p>
            <p>Aluno 2: {alunos[1].nome}</p>
            <p>Aluno 3: {alunos[2].nome}</p>
        </section>
    );
}

export default DadosCurso;