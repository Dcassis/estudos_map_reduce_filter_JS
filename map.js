//MÉTODO MAP()

let names = [
    { nome: "Daniel", idade: 46 },
    { nome: "Ana Terra", idade: 42 },
    { nome: "Charlotte", idade: 8 },
    { nome: "Lidia", idade: 70 },
    { nome: "Duda", idade: 14 }]

let saudacoes = names.map((name) => {
    console.log(`Boa tarde, ${name.nome} a sua idade são ${name.idade} anos`)
})

let numeros = [2, 5, 33, 20, 73]
let numeroDobrado = numeros.map((numero) => {
    return numero * 2
})
console.log(numeroDobrado)


