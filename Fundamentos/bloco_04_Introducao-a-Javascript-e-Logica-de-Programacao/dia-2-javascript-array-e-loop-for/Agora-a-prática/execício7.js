let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

menorNumero = 0

for (let index = 0; index < menorNumero.length; index++) {
  if(menorNumero < numbers[index]){
    numbers[index] = menorNumero
  }
}

console.log(menorNumero)