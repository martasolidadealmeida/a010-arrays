//Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso,
 //crie três novos arrays, chamados adicione um item numberao primeiro array. Utilizar 
 //console.log()para exibir o original ea cópia, e faça o que se pede 
 //abaixo nas cópias dos arrays originais;
 
 const arrayNumero = [6,20,8,35,1]
 const arrayStrings = ("bolo","pizza","sorvete")
 const mista = (20, "olá" ,false)


 const arrayNumeroCopia = arrayNumero.slice()
 const arrayStringsCopia = arrayStrings.slice()
 const mistaCopia = mista.slice

 
 // 1) adicione um item number ao primeiro array. Utilizar console.log()para exibir o 
 //original e a copia.

 arrayNumeroCopia.push[3]
 console.log (arrayNumero, arrayNumeroCopia)

 //2) Remoção do último item do segundo array. Utilizar console.log()para exibir o original ea cópia

 arrayStringsCopia.pop()
 console.log (arrayStrings, arrayStringsCopia)

 // 3)Remoção do segundo item do terceiro array. Utilizar console.log()para exibir o original ea cópia

 mistaCopia.splice(1,1)
 console.log (mista, mistaCopia)
 
 

 
