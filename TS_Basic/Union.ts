function combine(input1: number | string, input2: number | string,resultConversion: string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if(resultConversion)
  return result
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges)

const combineNames = combine("Bean", "Park", 'sada')
console.log(combineNames)