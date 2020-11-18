const turmaA = [
    {
        nome: 'Itallo',
        nota: 9.8
    },
    {
        nome: 'Leticia',
        nota: 10
    },
    {
        nome: 'Rafa',
        nota: 2.2
    }
]

const turmaB = [
    {
        nome: 'Italla',
        nota: 2
    },
    {
        nome: 'Leticio',
        nota: 5
    },
    {
        nome: 'Rafo',
        nota: 7.2
    }
]

function calculaMedia(turma) {
    let notaDoAluno = 0;

    for (let i = 0; i < turma.length; i++) {
        notaDoAluno += turma[i].nota;
    }

    return notaDoAluno / turma.length;
}

const mediaA = calculaMedia(turmaA);
const mediaB = calculaMedia(turmaB);

function enviaMensagem(turma, media) {
    if (media >= 5) {
        console.log(`A média da ${turma} foi de ${media}. Parabéns!`);
    } else {
        console.log(`A média da ${turma} foi de ${media}. Horrível!`)
    }
}

enviaMensagem('TurmaA', mediaA);
enviaMensagem('TurmaB', mediaB);