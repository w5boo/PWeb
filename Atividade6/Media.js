let nomeAluno = prompt("Digite o nome do aluno:");
let nota1 = parseFloat(prompt("Digite a primeira nota do aluno:"));
let nota2 = parseFloat(prompt("Digite a segunda nota do aluno:"));
let nota3 = parseFloat(prompt("Digite a terceira nota do aluno:"));

let totalNotas = nota1 + nota2 + nota3;
let media = totalNotas / 3;

alert("O aluno " + nomeAluno + " obteve média " + media.toFixed(2));