let numbers = [1, 70, 27, 3, 8, 100, 2, 30, 20];
let impares = []; 

for (let index = 0; index < numbers.length; index++) {
  if ((numbers[index] %2) === 1){
    numbers[index] = impares.push(numbers[index])
  }
}

if (impares.length === 0) {
  console.log("nenhum valor ímpar encontrado")
} else {
  console.log(impares)
}

