const atacante = prompt("Nome do atacante:")
const poderDeAtaque = prompt("Qual o poder de ataque ?")

const defensor = prompt("Qual o nome do defensor")
let pontosDeVida = prompt("Quantos ponto de vida ele possui?")
const poderDeDefesa = prompt("Qual seu poder de defesa?")
const possuiEscudo = prompt("Ele possui escudo? (Sim/Não)")

let danoCausado = 0

if(poderDeAtaque > poderDeDefesa && possuiEscudo ==="Não"){
    danoCausado = poderDeAtaque - poderDeDefesa
}else if( poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim"){
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2 }

pontosDeVida -=danoCausado

alert(atacante + " causou "  + danoCausado + " pontos em dano  em "  + defensor)
alert(
    atacante + "\nPoder de ataque:" + poderDeAtaque + "\n\n" + 
    defensor + "\nPontos de vida:"  + pontosDeVida + 
    "\nPoder de defesa " + poderDeDefesa + "\nPossui escudo:" + possuiEscudo)
    