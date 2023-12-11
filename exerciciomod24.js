// Classe abstrata
class Saiyajin 
{
    constructor(nome, poder) 
    {
        this.nome = nome;
        this.poder = poder;
        this.transformado = false;
    }

    transformar() 
    {
        console.log(`${this.nome} se transforma em Super Saiyajin!`);
        this.poder *= 2;
        this.transformado = true;
    }

    atacar(inimigo) 
    {
        const dano = this.transformado ? 30 : 15;
        console.log(`${this.nome} ataca ${inimigo.nome} causando ${dano} de dano!`);
        inimigo.receberDano(dano);
    }
}

// Criando instâncias
const goku = new Saiyajin("Goku", 100);
const gohan = new Saiyajin("Gohan", 80);
const vegeta = new Saiyajin("Vegeta", 90);

// Função comum para receber dano
Saiyajin.prototype.receberDano = function(dano) 
{
    console.log(`${this.nome} recebe ${dano} de dano!`);
    this.poder -= dano;
    if (this.poder <= 0) 
    {
        console.log(`${this.nome} foi derrotado.`);
    }
};

// Usando os objetos
gohan.transformar();
gohan.atacar(goku);
vegeta.atacar(goku);
goku.atacar(vegeta);
vegeta.transformar();
vegeta.atacar(goku);
goku.transformar();
goku.atacar(vegeta);
goku.atacar(vegeta);
goku.atacar(vegeta);
goku.atacar(vegeta);
goku.atacar(vegeta);
