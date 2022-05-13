const lado1 = 10
const lado2 = 10
const lado3 = 10

if (lado1 < (lado2 + lado3) && lado2 < (lado1 + lado3) && lado3 < (lado2 + lado1)){
  console.log("É triangulo")
} else {
  console.log("Não é triângulo")
}