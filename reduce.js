const idades = [8, 14, 18, 42, 43, 46, 47, 70, 76, 92]

const somaIdades = idades.reduce((prevValue, curValue) => prevValue + curValue, 0)
console.log(somaIdades)

const mediaIdades = idades.reduce((prevValue, curValue) => prevValue + curValue, 0)
console.log((mediaIdades) / idades.length)


