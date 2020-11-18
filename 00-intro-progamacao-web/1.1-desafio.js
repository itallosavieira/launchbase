// Cálculo IMC
const nome = 'Itallo';
const peso = 88;
const altura = 1.74;

const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log(`IMC ${imc}: ${nome} está acima do peso`);
} else {
    console.log(`IMC ${imc}: ${nome} não está acima do peso`);
}


// Cálculo Aposentadoria
const nome = "Leticia";
const sexo = "F";
const idade = 55;
const contribuicao = 30;

const idadeMinimaMulher = 30;
const idadeMinimaHomem = 35;

const regraMulher = 85;
const regraHomem = 95;

const somaIdadeContribuicao = idade + contribuicao;

if (sexo === 'M') {
    if (somaIdadeContribuicao >= regraHomem && idade >= idadeMinimaHomem) {
        console.log(`${nome}, você pode se aposentar!`);
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`);
    };
} else if (sexo === 'F') {
    if (somaIdadeContribuicao >= regraMulher && idade >= idadeMinimaMulher) {
        console.log(`${nome}, você pode se aposentar!`);
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`);
    };
};