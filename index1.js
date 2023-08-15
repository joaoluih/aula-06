/* exercicio 1 */
let nome 
let idade 

console.log(typeof nome, typeof idade) 
/* O undefined foi impresso pelo console porque não tem um tipo definido*/ 

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade")

console.log(typeof nome, typeof idade) /* Recebemos a informação em string por causa do comando prompt  */

console.log("Olá", nome, "você tem", idade, "anos")

