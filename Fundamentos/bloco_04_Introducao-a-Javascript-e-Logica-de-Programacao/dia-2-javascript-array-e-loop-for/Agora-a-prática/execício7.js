let numbers = [5, -23, 7, -10, 70, 8, 100, -9, 35, 27];
let menorValor = numbers[0]

for (let index = 1; index < numbers.length; index++) {
  if (numbers[index] < menorValor){
    menorValor = numbers[index]
  }  
}

console.log(menorValor)