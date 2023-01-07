const veiculo1 = prompt ("Informe o modelo do veículo 1:")
const velocidade1 = prompt ("Informe a velocidade do veículo 1:")

const veiculo2 = prompt ("Informe o modelo do veículo 2:")
const velocidade2 = prompt ("Informe a velocidade do veículo 2:")

if(velocidade1 > velocidade2){
    alert(veiculo1 + " é mais rápido que " + veiculo2)
}  else if (velocidade2 > velocidade1){
    alert(veiculo2 + " é mais rápido do que "+ veiculo1)
} else {
    alert(veiculo1 + " e " +  veiculo2 + " : Possuem a mesma velocidade!")
}




