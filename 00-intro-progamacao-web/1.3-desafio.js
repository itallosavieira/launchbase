// const usuarios = [
//     { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
//     { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
//     { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
// ];

// // function imprimeUsuarios(arr){
// //     for (let i = 0; i < arr.length; i++){
// //         console.log(`${arr[i].nome} trabalha com ${arr[i].tecnologias}`);
// //     }
// // };

// // imprimeUsuarios(usuarios)

// function checaSeUsuarioUsaCSS(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < (arr[i].tecnologias).length; j++) {
//             if (arr[i].tecnologias[j] === 'CSS') {
//                 console.log(`${arr[i].nome} trabalha com CSS`)
//             };
//         }
//     }
// }

// checaSeUsuarioUsaCSS(usuarios);

const usuarios = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];

function somaValoresDaArr(arr) {
    let soma = 0;

    for (let i = 0; i < (arr).length; i++) {
        soma += arr[i];
    }

    return soma;
}

function calculaSaldo(arr) {
    const receita = somaValoresDaArr(arr.receitas);
    const despesa = somaValoresDaArr(arr.despesas);
    const saldo = (receita - despesa);

    return saldo;
}

function imprimeSaldoDeTodosUsuarios(arr) {
    for (let i = 0; i < arr.length; i++) {
        let saldoDoUsuario = calculaSaldo(arr[i]).toFixed(1);
        if (saldoDoUsuario > 0) {
            console.log(`${arr[i].nome} possui saldo POSITIVO de ${saldoDoUsuario}`);
        } else {
            console.log(`${arr[i].nome} possui saldo NEGATIVO de ${saldoDoUsuario}`);
        }
    }
}

imprimeSaldoDeTodosUsuarios(usuarios);