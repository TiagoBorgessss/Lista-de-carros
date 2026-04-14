const time = {
    nome: "plmeiras",
    partidas: 15,
    vitorias: 10,
    empates: 2,
    derrotas: 3,
    Mundial: 2
}

const time1 = {
    nome: "santos",
    partidas: 15,
    vitorias: 9,
    empates: 4,
    derrotas: 2
}

const time2 = {
    nome: "corinthians",
    partidas: 15,
    vitorias: 8,
    empates: 3,
    derrotas: 4
}

const time3 = {
    nome: "sao paulo",
    partidas: 15,
    vitorias: 7,
    empates: 5,
    derrotas: 3
}

const time4 = {
    nome: "flamengo",
    partidas: 15,
    vitorias: 1,
    empates: 1,
    derrotas: 3
}

const time5 = {
    nome: "gremio",
    partidas: 15,
    vitorias: 6,
    empates: 6,
    derrotas: 3
}

const time6 = {
    nome: "atletico mineiro",
    partidas: 15,
    vitorias: 8,
    empates: 4,
    derrotas: 3
}

console.log(time.nome, "Total de pontos:  ", time.vitorias * 3 + time.empates)
console.log(time1.nome, "Total de pontos: ", time1.vitorias * 3 + time1.empates)
console.log(time2.nome, "Total de pontos: ", time2.vitorias * 3 + time2.empates)
console.log(time3.nome, "Total de pontos: ", time3.vitorias * 3 + time3.empates)
console.log(time4.nome, "Total de pontos: ", time4.vitorias * 3 + time4.empates)
console.log(time5.nome, "Total de pontos: ", time5.vitorias * 3 + time5.empates)
console.log(time6.nome, "Total de pontos: ", time6.vitorias * 3 + time6.empates)
console.log(time.nome, "total de mundiais: ", time.Mundial)