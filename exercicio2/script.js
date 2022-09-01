//Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, 
//usando console.log()onst arrayNumero = [6,20,8,35,1]

//1)Imprima a quantidade de itens de cada array (utilize um console.log() 
//para cada impressão)
const arrayNumero = [6,20,8,35,1]
console.log("tamnaho da array", arrayNumero.length)

const arrayStrings = ["bolo", "pizza", "sorvete"]
console.log("tamanho da array", arrayStrings.length)

const mista = [20, "olá", false]
console.log("tamanho da array", mista.length)

//2)Imprima o primeiro item do primeiro array, o segundo item do segundo array, eo 
//terceiro item do terceiro array

console.log(arrayNumero[0])
console.log(arrayStrings[1])
console.log(mista[2])

//3)Imprima uma informação booleana verdadeira sobre a inclusão de um item 
//do primeiro array, e uma informaçao


arrayNumero.push(2)
console.log(arrayNumero.includes(2))

mista.push("gato")
console.log(mista.includes("gato"))