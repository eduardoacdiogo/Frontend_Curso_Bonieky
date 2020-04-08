// Variável local
let array = [1, 2, 3];
for (let i in array) {
    console.log(array[i]);
}
/*
Apresenta o erro de i nao definido, pois ele foi criado com o let e dentro do for
assim ele só existirar lá
console.log(i)
*/
// Criando uma cosntante, lembrando que constantes são imutáveis
const constNome = "Eduardo";

// Variável em strings
let idade = 99;
let sobrenome = "Andre";

let texto = "Meu nome eh " + constNome + sobrenome + " e tenho " + idade + " anos.";

let texto2 = `Meu nome eh ${constNome} ${sobrenome} e tenho ${idade} anos`;

// Desconstruindo objetos e arrays

const info = {
    nome: "Jose",
    sobrenome1: "Andre",
    idade1: "50",
    pais: "Brasil"
}

let { nome } = info;
// eu posso definir o nome da variavel que vai ficar como por exemplo na idade1 que vai ser chamada de anos
let { sobrenome1, idade1: anos } = info;
console.log(nome, " ", sobrenome1, " ", anos, " ", info.pais);

const array1 = ["Eduardo", "Paulo", "Diogo"];

let { 1: segundoNome } = array1;

console.log(segundoNome);

let nomes = ["Eduardo", "Andre", "Diogo"];

let [primeiro, segundo, terceiro] = nomes;

console.log(primeiro, " ", segundo, " ", terceiro);

const mat = {
    somar: function(x, y) { return x + y },
    multiplicar: function(x, y) { return x * y }
}

console.log(mat.somar(5, 4));
let { somar: adicionar } = mat;
console.log(adicionar(2, 3));

// Objeto literal
function setInfo(nome2, sobrenome2, idade2) {
    const newInfo = { nome2: name, sobrenome2: lastName, idade2 };
    return newInfo;
}

// Operador Spread
let numeros = [1, 2, 3, 4];
let outros = [...numeros, 5, 6, 7, 8];
console.log(outros);

let infor = {
    nom: 'eduardo',
    sobre: 'andre',
    id: 23
}
console.log(infor);
let novaInfo = {
    ...infor,
    cidade: 'Natal',
    estado: 'RN'
}
console.log(novaInfo);

// Operador Rest

function add(numero, ...novoNumero) {
    numero = [
        ...numero,
        ...novoNumero
    ];
    console.log(numero);
    return numero;
}
let numero = [];
numero = add(numero, 1, 2, 3);
console.log(numero);
numero = add(numero, 5, 6, 7, 8, 9, 10);
console.log(numero);

// Funções anonimas
function concatenar(valor, ...num) {
    let valores = [...valor, ...num];
    /* Faz a mesma coisa que o total nao comentado
    let total = valores.reduce(function(atual, x) {
        console.log(`${atual} + ${x}`);
        return atual + x;
    });*/
    let total = valores.reduce((atual, x) => {
        console.log(`${atual} + ${x}`);
        return atual + x;
    });
    console.log(total);
    return valores;
}
let valor = [];
valor = concatenar(valor, 1, 2, 3, 4, 5);
console.log(valor);
valor = concatenar(valor, 6, 7, 8, 9);
console.log(valor);

//Variaveis padroes 

function cadastro(nome, sobrenome = '', status = false) {
    console.log(`${nome}, ${sobrenome}, ${status}`);
}
cadastro("Edu");

// Classes
class Animal {
    constructor(tipo, pernas) {
        this.tipo = tipo;
        this.pernas = pernas;

    }

    falar(som = 'Som qualquer') {
        return som;
    }
    get dados() {
        return `Tipo: ${this.tipo}, Pernas ${this.pernas}`;
    }
}
class Gato extends Animal {
    constructor(pernas, cor) {
        super('Gato', pernas);
        this.cor = cor;
    }
    falar(som = 'Miau') {
        return som;
    }
}

let gato = new Gato(4, 'preto');

gato.pernas;

console.log(gato.dados);