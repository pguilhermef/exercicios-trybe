let scoreSituation = "Aprovado"


switch (scoreSituation){
  case "Aprovado":
    console.log("Parabéns, você foi aprovada(o)!") 
    break;
  case "Lista":
    console.log("Você está na nossa lista de espera")
    break;
  case "Reprovado":
    console.log("Você foi reprovada(o)")
    break;
  default:
    console.log("Não se aplica")
}