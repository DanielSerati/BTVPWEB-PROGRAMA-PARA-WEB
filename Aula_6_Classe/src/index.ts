// Exercícios Classes:

// 01 – Complete a classe Carro para que os atributos da mesma sejam acessados somente por métodos
// (Getters/ Setters) e tenha um método para calcular a idade do carro com base no ano atual. Crie uma
// instância de Carro

class Carro{
private Modelo:string;
private AnodoCarro:number;
private AnoAtual:number;

    constructor (Modelo:string, AnodoCarro:number, AnoAtual:number){
        this.Modelo = Modelo;
        this.AnodoCarro = AnodoCarro;
        this.AnoAtual =AnoAtual;
    }
    get getModelo():string{
        return this.Modelo;
    }
    get getAnodoCarro():number{
        return this.AnodoCarro;
    }
    get getAnoAtual():number{
        return this.AnoAtual;
    }
    set setModelo(Modelo:string){
        this.Modelo = Modelo;
    }
    set setAnodoCarro(AnodoCarro:number){
        this.AnodoCarro = AnodoCarro;
    }
    set setAnoAtual(AnoAtual:number){
        this.AnoAtual = AnoAtual;
    }
    
    calcularIdadedocarro():number {
    return this.AnoAtual - this.AnodoCarro;
    }
}
 
let CAR = new Carro("Fusca", 1959, 2024);
console.log("Exercicio 1");
console.log(CAR);
 
CAR.setModelo = "Uno com escada";
console.log(CAR.getModelo);
console.log("O carro possui " + CAR.calcularIdadedocarro());
console.log("\n");

// 02 – Desenvolva uma classe Calculadora em TypeScript
// Crie uma classe Calculadora que encapsula funcionalidades matemáticas básicas. Esta classe deve
// possuir os seguintes requisitos:
// • Dois atributos numéricos (valor1 e valor2) para armazenar os operandos das operações.
// • Um construtor que aceite dois números como parâmetros e os atribua aos respectivos
//   atributos.
// • Métodos para realizar as seguintes operações matemáticas:
// ◦ Soma: retorna a adição dos dois valores.
// ◦ Subtração: retorna a diferença entre os dois valores.
// ◦ Multiplicação: retorna o resultado da multiplicação dos dois valores.
// ◦ Divisão: retorna o resultado da divisão do primeiro valor pelo segundo valor. Atenção:
//   evite divisões por zero.
// ◦ Porcentagem: retorna a porcentagem do primeiro valor em relação ao segundo valor.
// ◦ Getters e Setters
// Certifique-se de que a classe lida corretamente com situações de erro, como a divisão por zero.
// Teste todos os métodos.

class Calculo {
    private valor1: number;
    private valor2: number;

    constructor(valor1: number, valor2: number){
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    get getValor1():number{
        return this.valor1;
    }
    get getValor2():number{
        return this.valor2;
    }
    set setValor1(valor1:number){
        this.valor1=valor1;
    }
    set setValor2(valor2:number){
        this.valor2=valor2;
    }
    Soma(){
        return this.valor1 + this.valor2;
    }
    Subtracao(){
        return this.valor1 - this.valor2;
    }
    Multi(){
        return this.valor1 * this.valor2;
    }
    Divisao(){
        if(this.valor2==0){
            return "Nao e possivel dividir por zero";
        }
        else{
            return this.valor1 / this.valor2;
        }
    }
    Porcemtagem(){
        let conv = this.valor2 /100;
        return this.valor1 * conv;
    }
}
let Conta = new Calculo(1,20);
console.log("Exercicio 2");
console.log("O valor 1 e: ", Conta.getValor1);
console.log("O valor 2 e: ", Conta.getValor2);
console.log("Resultado da soma: ", Conta.Soma());

Conta.setValor1 = 93;
console.log("Resultado da subtracao: ", Conta.Subtracao());

Conta.setValor2= 2.5;
console.log("Resultado da multiplicacao: ", Conta.Multi());

Conta.setValor2= 0;
console.log("Resultado da divisão: ", Conta.Divisao());

Conta.setValor2= 6;
console.log("Resultado da divisão: ", Conta.Divisao());

Conta.setValor1= 72;
Conta.setValor2= 8;
console.log("Resultado da porcentagem: ", Conta.Porcemtagem(), "\n");

// 03 – Desenvolva uma classe Produto em TypeScript
// Crie uma classe Produto que represente um item disponível em um catálogo de uma loja virtual. A
// classe deve ter as seguintes características:

// Atributos:
// • nome: uma string que representa o nome do produto.
// • preco: um número que representa o preço do produto.
// • quantidadeEstoque: um número inteiro que indica a quantidade disponível em estoque do
//   produto.

// Construtor:
// • Deve aceitar três parâmetros: nome, preco e quantidadeEstoque, e atribuí-los aos
//   respectivos atributos da classe.

// Métodos:
// • calcularValorTotalEmEstoque(): retorna o valor total em estoque do produto, calculado
//   multiplicando o preço pelo quantidade em estoque.
// • reporEstoque(quantidade: number): adiciona a quantidade especificada ao estoque do
//   produto.
// • vender(quantidade: number): remove a quantidade especificada do estoque do produto. Se a
//   quantidade desejada for maior do que a disponível em estoque, deve ser lançado um erro
//   indicando que não há estoque suficiente.
// • Getters e Setters
//   Certifique-se de que a classe lida corretamente com situações de erro, como tentar vender mais
//   produtos do que há em estoque. Teste todos os métodos.

class Produto{
    private nome: string;
    private preco: number;
    private quantidadeEstoque: number;

    constructor(nome:string, preco:number, quantidadeEstoque:number){
        this.nome = nome;
        this.preco= preco;
        this.quantidadeEstoque = quantidadeEstoque;
    }

    get getNome():string{
        return this.nome;
    }
    get getPreco():number{
        return this.preco;
    }
    get getquantidadeEstoque():number{
        return this.quantidadeEstoque;
    }

    set setNome(nome:string){
        this.nome;
    }
    set setPreco(preco:number){
        this.preco;
    }
    set setquantidadeEstoque(quantidadeEstoque:number){
        this.quantidadeEstoque;
    }
    
    calcularValorTotalEmEstoque(){
        return this.preco * this.getquantidadeEstoque;
    }
    reporEstoque(quantidade: number){
        this.quantidadeEstoque += quantidade;
    }
    vender(quantidade: number){
        this.quantidadeEstoque -= quantidade;
    }
}

let Produto1 = new Produto("Caldo de Cana", 14.00, 20);
console.log("Exercicio 3");
console.log(Produto1);

Produto1.reporEstoque(10);
console.log("O estoque de Caldo de Cana foi reposto com 10 unidades, valor atual: ", Produto1.getquantidadeEstoque, "uni.");

Produto1.vender(5)
console.log("5 unidades de Caldo de Cana foram vendidas, estoque atual: ", Produto1.getquantidadeEstoque, "uni.");