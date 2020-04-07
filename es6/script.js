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

// Destroindo objetos e arrays

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