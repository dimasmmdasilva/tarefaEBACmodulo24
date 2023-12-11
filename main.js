function Carro(modelo, fabricante, anoModelo, anoFabricacao)
{
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function ()
    {
        console.log("acelerar");
    }
}

const carroJoao = new Carro("Onix", "Chevrolet", 2012, 2011)
const carroMaria = new Carro("Gol", "Volkswagem", 2022, 2020)

console.log(carroJoao);
console.log(carroMaria);