let vitorias = 70
let derrotas = 2
let saldoVitorias

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


let nivel = calcularRank(vitorias, derrotas)

console.log(`O herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)