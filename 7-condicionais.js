console.log(`Trabalhando com Condicionais`);
// cmd k c comenta todo um bloco cmd k u descomenta

listaDeDestinos = new Array(
    `São Paulo`,
    `Porto Alegre`,
    `Recice`
);

const idadeComprador = 19;

if (idadeComprador >= 18) {
    listaDeDestinos.splice(2, 1);
    console.log(listaDeDestinos);
    console.log("Passagem vendida com sucesso");
} else {
    console.log("Não posso vender para menor de idade");
}





