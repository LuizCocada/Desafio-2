let estudentes = [
    {
        nome: "luiz",
        nota1: 5,
        nota2: 8,
    },
    {
        nome: "Lorena",
        nota1: 4,
        nota2: 10,
    },
    {
        nome: "Fernando",
        nota1: 4,
        nota2: 6,
    },
]

function result(firstNote, secondNote){
    return (firstNote + secondNote) / 2
}

for(let estudent of estudentes){
    result(estudent.nota1, estudent.nota2)

if(result(estudent.nota1, estudent.nota2) < 7){
    alert(`
    A Média do aluno ${estudent.nome} é: ${result(estudent.nota1, estudent.nota2)}
    Não foi dessa vez, ${estudent.nome}! tente novamente!`)
}
else{
    alert(`
    A Média do aluno ${estudent.nome} é: ${result(estudent.nota1, estudent.nota2)} 
    Parabéns ${estudent.nome}! você passou no Concurso!!`)
}

}







