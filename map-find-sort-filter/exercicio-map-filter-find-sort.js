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

const medias = (alunas) => {
  const mediasAlunas = alunas.map((aluna) =>
    ((aluna.prova.p1 + aluna.prova.p2 + aluna.prova.p3) / 3).toFixed(2)
  )
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
  return arrayNumero.map((notaAluna) =>
    notaAluna >= mediaEscolar ? true : false
  )
}
//console.log(aprovada(6))
//==================================================================

//3) Fazer uma função que retorne um array de nomes das aprovada
//Criamos uma const global, com um parametro chamada de  alunas para passar o array.
//Depois criamos um notas alunas, mapeando o objeto, e ja fazendo a soma da media das alunas!
//Retornamos tudo, e ja criamos o Nome das alunas, que filtrava notas igual ou maior que 6,
//e depois mapeamos para puxar só os nomes das aprovadas!
//Por fim chamamos no console.log()!
 
const adicionandoAlunas = (alunas) => {
  const notasAlunas = alunas.map((aluna) => {
    return {
      nome: aluna.nome,
      nota: ((aluna.prova.p1 + aluna.prova.p2 + aluna.prova.p3) / 3).toFixed(2)
    }
  })
  return notasAlunas
}
const NomeAprovadas = adicionandoAlunas(alunas)
  .filter((nome) => nome.nota >= 6)
  .map((nome) => nome.nome)
//console.log(NomeAprovadas)

//=================================================================
//4) Fazer uma função que retorne um array de nome das reprovadas
//Nessa atividade, criamos o const nome das reprovadas, utilizamos a  const acima, passando uma filtragem para menor que 6,
//em seguida um map para púxar o nome das reprovadas!
//Dai passamos o console.log()

const NomeReprovadas = adicionandoAlunas(alunas)
  .filter((nome) => nome.nota < 6)
  .map((nome) => nome.nome)
// console.log(NomeReprovadas)

//==================================================================

//5) Fazer uma função que retorne um array de objetos:

//-Criamos uma funcao e retornamos as alunas mapeando e guardando detro de uma constante
//-Ja dentro do mapeamento retornamos dois objetos onde estamos guardando o nome e a provas
//e retornamos a contante passando o objeto por parametro.

const catalogoDeAlunas = (aluna) =>{
  const addAlunas = aluna.map((aluna) =>{
    return{
      nome: aluna.nome,
      prova: ((aluna.prova.p1 + aluna.prova.p2 + aluna.prova.p3) / 3).toFixed(2),
      Resultado: ((aluna.prova.p1 + aluna.prova.p2 + aluna.prova.p3) / 3).toFixed(2) >= 7 ? "Aprovada"  : "Reprovada"
    }
  })
  return addAlunas
}
console.log(catalogoDeAlunas(alunas))

//===================================================================

//6) ordenar as notas das alunas 
const ordenacao = () =>{
 return  catalogoDeAlunas(alunas).map(notas => notas.prova).sort()
} 
console.log(ordenacao())

//==================================================================

//7) Fazer uma função que retorne o nome da aluna com maior nota
 
//==================================================================

//8) Fazer uma função que retorne o nome da aluna com menor nota

//==================================================================

//9) Fazer uma função que retorne a media de toda a turma