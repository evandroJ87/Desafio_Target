
//desafio #2
const valor = ("Digite o valor desejado: ");

function fibonacciSequence(n) {
    if (n === 1) {
      return [0, 1];
    } else {
      var sequence = fibonacciSequence(n - 1);
      sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
      return sequence;
    }
  }
  console.log(fibonacciSequence)
  