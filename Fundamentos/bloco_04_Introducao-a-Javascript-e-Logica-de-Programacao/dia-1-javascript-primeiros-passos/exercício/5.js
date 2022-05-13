const a = 6
const b = 12
const c = 5

let angulo1;
let angulo2;
let angulo3;

if (a + b < c){
  angulo1=true
} else {
  angulo1=false
}

if (a + c < b){
  angulo2=true
} else {
  angulo2=false
}

if (b + c < c){
  angulo3=true
} else {
  angulo3=false
}

if ((angulo1 = true) && (angulo2 = true) && (angulo3 = true)){
  console.log("eres uno tringulinho manito!")
} else {
  console.log("no eres uno triangulinho")
}