let readline = require('node:readline');

let usuario = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function perguntarIdade() {
    usuario.question('Qual idade?', resposta => {

        if (Number.isNaN(Number(resposta))) {
            console.log('Número inválido! Por favor, coloque um valor válido!');
            perguntarIdade();
            return;
        }

        if (resposta <= 17) {
            console.log(`Idade, ${resposta}, você tem menos de 18 anos.`);
        } else {
            console.log(`Idade, ${resposta}, você tem mais de 18 anos.`);
        }

        usuario.close();
    });
}

usuario.question('Qual seu nome?', resposta => {
    console.log(`Olá, ${resposta}!`);
    perguntarIdade();
});