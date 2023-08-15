/* exercicio 1 */
let nome 
let idade 

console.log(typeof nome, typeof idade) 
/* O undefined foi impresso pelo console porque não tem um tipo definido*/ 

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade")

console.log(typeof nome, typeof idade) /* Recebemos a informação em string por causa do comando prompt  */

console.log("Olá", nome, "você tem", idade, "anos")

/* Exercicio 2 */ 

let musica = prompt("Você gosta de musica?")
let batata = prompt("voce gosta de comer batata?")
let beber = prompt("vamos beber hoje?")



console.log("voce gosta de ouvir", musica,) 
console.log("voce gosta de comer", batata)
console.log("vamos beber hoje", beber) 


/* Exercicio 3 */ 
let a = 20 
let b = 30

let c = a 

a = b 
b = c 

console.log(a, b)