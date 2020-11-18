const empresa = {
    nome: 'Rocketseat',
    cor: 'roxo',
    foco: 'Programação',
    endereco: {
        rua: 'Rua Guilherme Gembala',
        numero: '260'
    }
};

function imprimeInfos() {
    console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`);
}

imprimeInfos();

const usuario = {
    nome: 'Itallo',
    idade: '24',
    tecnologia: [
        { nome: 'JavaScript', especialidade: 'Web/Mobile' },
        { nome: 'CSS', especialidade: 'Estilização' }
    ]
}

function imprimeInfosUsuario() {
    console.log(`O usuário ${usuario.nome} tem ${usuario.idade} e usa a tecnologia ${usuario.tecnologia[0].nome} com especialidade em ${usuario.tecnologia[0].especialidade}`);
}

imprimeInfosUsuario();