//MÉTODO FILTER()

let names = [
    { nome: "Daniel", idade: 46 },
    { nome: "Ana Terra", idade: 42 },
    { nome: "Charlotte", idade: 8 },
    { nome: "Lidia", idade: 70 },
    { nome: "Duda", idade: 14 }
]

let pessoa = names.filter((name) => {
    return name.idade > 7 & name.idade < 43
})
console.log(pessoa)

const carros = ["Polo", "Peugeot 208", "Argo", "Onix"]
const carro = carros.filter((car) => {
    if (car[0] === "P"){
        return car
    }
})
console.log(carro)


