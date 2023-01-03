function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' && typeof n2 !== 'number') {
  //   throw new Error('Error')
  // }
  const result = n1 + n2
  if (showResult === true) {
    console.log(phrase + n1 + n2);
  } else {
    return result;
  }
}

const number1: number = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
