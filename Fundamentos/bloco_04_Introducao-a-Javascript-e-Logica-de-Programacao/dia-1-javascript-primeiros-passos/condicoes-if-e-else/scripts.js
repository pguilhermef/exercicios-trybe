const studentScore = 50

// Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
// Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
// Se a nota for menor que 60, imprima "Você foi reprovada(o)"

if (studentScore >= 80 && studentScore <= 100) {
  console.log("Parabéns, você foi aprovada(o)!")
}
else if (studentScore >= 60 && studentScore <= 80) {
  console.log("Você está na nossa lista de espera")
}
else {
  console.log("Você foi reprovada(o)")
}