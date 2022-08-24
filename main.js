const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let propriedades = []

function organiza(){
  rl.question("Digite a propriedade CSS desejada que irei mostrar por ordem alfabética: ", resposta => {
    if (resposta.trim().toLowerCase() !== 'sair'){
      propriedades.push(resposta)
      organiza()
    } else{
      rl.close()
      console.log(propriedades.sort())
    }
  })
}

organiza()