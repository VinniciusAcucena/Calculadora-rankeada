let vitorias
let derrotas
let saldoVitorias
let nivel

const readline = require('readline')

leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function receberInput(msg) {
    return new Promise((resolve) => {
        this.leitor.question(msg, (response) => {
            resolve(response);
        });
    });
}

function calcularRank(vitorias, derrotas) {
    saldoVitorias = vitorias - derrotas

    if(saldoVitorias <= 10) {
        return "Ferro"
    } else if(saldoVitorias > 10 && saldoVitorias <= 20) {
        return "Bronze"
    } else if(saldoVitorias > 20 && saldoVitorias <= 50) {
        return "Prata"
    } else if(saldoVitorias > 50 && saldoVitorias <= 80) {
        return "Ouro"
    } else if(saldoVitorias > 80 && saldoVitorias <= 90) {
        return "Diamante"
    } else if(saldoVitorias > 90 && saldoVitorias <= 100) {
        return "Lendário"
    } else {
        return "Imortal"
    }
    
}

receberInput('Quantas vitórias?').then( (vitorias) => {
    receberInput('Quantas derrotas?').then( (derrotas) => {
        leitor.close();
        nivel = calcularRank(vitorias, derrotas)
        console.log(`O herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)
    })
})



