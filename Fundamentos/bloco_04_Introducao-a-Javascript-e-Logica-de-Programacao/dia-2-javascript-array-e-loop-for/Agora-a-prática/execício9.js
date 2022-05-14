let ate25 = []
let div25 = []

for (let index = 1; index <= 25; index++) {
  ate25.push(index)  
}

for (let index = 0; index < ate25.length; index++) {
  div25.push(ate25[index]/2)
}

console.log(div25)