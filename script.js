let numberOne, numberTwo

Number((numberOne = prompt('Digite um número para que possamos calcular: ')))
Number((numberTwo = prompt('Digite outro número: ')))

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = (numberOne / numberTwo).toFixed(2)
let restDiv = numberOne % numberTwo

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${mult}`)
alert(`A divisão dos dois números é: ${div}`)
alert(`O Resto da divisão dos dois números é: ${restDiv}`)

if (sum % 2 == 0) {
  alert(`A soma dos dois números é: ${sum} e Par`)
} else if (sum % 2 == 1) {
  alert(`A soma dos dois números é: ${sum} e Impar`)
}

if (numberOne === numberTwo) {
  alert(`Os dois números inseridos são iguais!`)
} else {
  alert(`Os dois números inseridos são diferentes!`)
}