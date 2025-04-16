//1 variáveis usadas para cadastrar usuários
var nomedeusuario = "juliana"
console.log(nomedeusuario)
var idadeusuario = 14
console.log(idadeusuario)
var cidade = "Pindamonhangaba"
console.log(cidade)
var estudando = true;
console.log(estudando)

//2 condicionais usadas para verificar se o usuário pode participar da plataforma
let idade = 13

if(idade >= 13) {
    console.log("Você pode participar da plataforma");
} else {
    console.log("Você não pode participar");
}

//3 função saudação usada para dar boas-vindas ao usuário
function saudacao(nome, cidade) {
    console.log("Olá, " + nome + "! Seja bem-vindo(a) a nossa plataforma. Vejo que você é de " + cidade);
}

saudacao("Manuela", "Rio de janeiro")

//4 função parametro para identificar a média das notas e o desempenho do aluno
function calcularMedia(nota1, nota2, nota3) {
    var valor = (nota1 + nota2 + nota3) /3
    if(valor >= 7) {
        console.log("Desempenho bom!");
    } else {
        console.log("É necessário melhorar.");
    }
       
}

calcularMedia(10 , 10, 10)
