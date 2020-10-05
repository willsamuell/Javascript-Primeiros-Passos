console.log(`Trabalhando com Listas`);
// cmd k c comenta todo um bloco cmd k u descomenta

listaDeDestinos = new Array(
    `São Paulo`,
    `Porto Alegre`,
    `Recice`
);
console.log(listaDeDestinos);

listaDeDestinos.push(`Alegrete`);
console.log(listaDeDestinos);

listaDeDestinos.splice(2,1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);