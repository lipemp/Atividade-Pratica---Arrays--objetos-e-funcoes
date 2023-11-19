const data = [
    {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
    },
    {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
    },
    {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
    },
    {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
    },
    {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
    },
    {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
    },
    {
    nome: 'Joice Castro da Silva',
    sexo: 'F',
    salario: 3350.25,
    },
];

// 1. Imprima no console a quantidade de pessoas Total.
console.log(`1. O total de pessoas cadastradas é de ${data.length}`)

// 2. Imprima no console a quantidade de pessoas do sexo feminino.
console.log(`2. A quantidade de pessoas do sexo feminino é de ${data.filter(pessoa => pessoa.sexo === 'F').length}`)

// 3. Imprima no console a soma do salário de todas as pessoas.
let somaSalarios = data.reduce((total, pessoa) => total + pessoa.salario, 0);
console.log(`3. A soma de todos os salários é: ${somaSalarios}`);

// 4. Imprima no console a média do salário de todas as pessoas.
let mediaSalarios = (somaSalarios / data.length).toFixed(2);
console.log(`4. A média de todos os salários é de aproximadamente: ${mediaSalarios}`);

// 5. Imprima no console a soma do salário de todos as pessoas do sexo masculino
let somaSalariosMasc = data.filter(pessoa => pessoa.sexo === 'M').reduce((total, pessoa) => total + pessoa.salario, 0,);
console.log(`5. A soma dos salários das pessoas do sexo masculino é: ${somaSalariosMasc}`);

// 6. Imprima no console a média do salário de todas as pessoas do sexo masculino
let mediaSalariosMasc = (somaSalariosMasc / data.filter(pessoa => pessoa.sexo === 'M').length).toFixed(2);
console.log(`6. A média de todos os salários de todas as pessoas do sexo masculino é de aproximadamente: ${mediaSalariosMasc}`);

// 7. Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000,
//imprima verdadeiro no console caso exista, caso contrário falso.
let salarioSuperior = data.some(pessoa => pessoa.salario > 7000)
salarioSuperior = salarioSuperior ? "Verdadeiro" : "Falso";
console.log(`7. Existe algum salário superiror a 7000? ${salarioSuperior}`)

// 8. Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.
let index = data.findIndex(pessoa => pessoa.nome === 'Eva Trindade');
console.log(`8. A posição da pessoa de nome 'Eva Trindade' é: ${index}`);

// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".
let pessoasComSobrenomeSilva = data.filter(pessoa => pessoa.nome.includes('Silva'));
console.log(`9. ${pessoasComSobrenomeSilva.map(pessoa => JSON.stringify(pessoa))}`);

// 10. Imprima os nomes utilizando o MAP
let sobrenomeSilvaComMap = data.filter(pessoa => pessoa.nome.includes('Silva')).map(pessoa => pessoa.nome);
console.log(`10. Pessoas com o sobrenome Silva: ${sobrenomeSilvaComMap.join(', ')}`);