const alunas = [
    { nome: "Ashley", prova: { p1: 5.6, p2: 6.7, p3: 9 } },
    { nome: "Sabrina", prova: { p1: 6.3, p2: 7.5, p3: 10 } },
    { nome: "Samantha", prova: { p1: 8, p2: 9.2, p3: 7 } },
    { nome: "Andreia", prova: { p1: 9, p2: 8, p3: 10 } },
    { nome: "Raquel", prova: { p1: 10, p2: 9.7, p3: 5 } },
    { nome: "Amanda", prova: { p1: 2, p2: 4.6, p3: 9.9 } },
    { nome: "Pietra", prova: { p1: 8.3, p2: 3.1, p3: 9.8 } },
    { nome: "Jaqueline", prova: { p1: 3.4, p2: 7.2, p3: 6.8 } },
    { nome: "Alessandra", prova: { p1: 1.4, p2: 2.7, p3: 6.9 } },
    { nome: "Jane Kelly", prova: { p1: 7, p2: 5.5, p3: 9.1 } },
]

//1) FUNCAO PARA CALCUCAR MEDIAS DAS ALUNAS

//-Criamos a funcao media para imprimir tudo no console.
//-Mapeamos a funcao alunas, e somamos os resultados das provas e dividimos
//pela quantidade de provas.

const medias = (alunas) =>{
const mediasAlunas = alunas.map(aluna => ((aluna.prova.p1 + aluna.prova.p2  + aluna.prova.p3) / 3).toFixed(2))
return mediasAlunas
}
//console.log(medias(alunas))
//==================================================================

//2) FUNCAO CORINGA PARA CALCULAR MEDIAS
//talvez uma funcao de media que retorne true ou flase tipo essa aqui da linha 24

//Criamos uma variavel, chamada aprovada, com um parametro para desidir a média dos alunos.
//Depois criamos um variavel, que recebia a media, mapeada, que dentro do mapeamento, passamos um Number, para varer a string
//E depois retornamos tudo, passando por uma verificacao!
//E dai passamos por console.log()!
const aprovada = (mediaEscolar) => {
  const arrayNumero = medias().map(Number)
  return arrayNumero.map(notaAluna => notaAluna >= mediaEscolar ? true : false)
}
//console.log(aprovada(6))
//==================================================================

//3) Fazer uma função que retorne um array de nomes das aprovada

const adicionandoAlunas = (aluna) => {
  const notasAlunas = alunas.map(aluna => {
    return {
        nome: aluna.nome,
        nota: ((((aluna.prova.p1 + aluna.prova.p2) + aluna.prova.p3) / 3).toFixed(2))
    }
})
return notasAlunas.filter(nota => nota.nota >= 6).map(nome => nome.nome)
}
console.log(adicionandoAlunas())



//==================================================================

//4) Fazer uma função que retorne um array de nome das reprovadas



//==================================================================

//5) Fazer uma função que retorne um array de objetos:



//==================================================================

//6) ordenar as notas das alunas


//==================================================================

//7) Fazer uma função que retorne o nome da aluna com maior nota


//==================================================================

//8) Fazer uma função que retorne o nome da aluna com menor nota


//==================================================================

//9) Fazer uma função que retorne a media de toda a turma



