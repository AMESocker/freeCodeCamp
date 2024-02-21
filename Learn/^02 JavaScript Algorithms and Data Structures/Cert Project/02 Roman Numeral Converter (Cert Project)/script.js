function romanNumberConvert(roman) {
  // complete the solution by transforming the 
  // string roman numeral into an integer
  let splitInput = roman.split('');
  let b = []
  let romObj = [
    {
      symbol: 'I',
      value: 1
    }, {
      symbol: 'V',
      value: 5
    }, {
      symbol: 'X',
      value: 10
    }, {
      symbol: 'L',
      value: 50
    }, {
      symbol: 'C',
      value: 100
    }, {
      symbol: 'D',
      value: 500
    }, {
      symbol: 'M',
      value: 1000
    }
  ]
  for (let i = 0; i < splitInput.length; i++) {
    for (let j = 0; j < romObj.length; j++) {

      if (splitInput[i] == romObj[j].symbol) {
        b.push(romObj[j].value)
      }
    }
  }
  let c = 0
  for (let i = 0; i < b.length; i++) {
    if (b[i + 1] > b[i]) {
      c -= b[i]
    } else {
      c += b[i]
    }
  }
  return c
}