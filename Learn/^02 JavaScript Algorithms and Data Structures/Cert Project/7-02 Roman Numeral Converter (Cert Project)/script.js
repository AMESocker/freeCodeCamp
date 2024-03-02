const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');


const romanNumberConvert = (arabic) => {

  let roman = []

  const romanObj = [
    { roman: 'M', arabic: 1000 },
    { roman: 'CM', subArabic: 900 },
    { roman: 'D', arabic: 500 },
    { roman: 'CD', subArabic: 400 },
    { roman: 'C', arabic: 100 },
    { roman: 'XC', subArabic: 90 },
    { roman: 'L', arabic: 50 },
    { roman: 'XL', subArabic: 40 },
    { roman: 'X', arabic: 10 },
    { roman: 'IX', subArabic: 9 },
    { roman: 'V', arabic: 5 },
    { roman: 'IV', subArabic: 4 },
    { roman: 'I', arabic: 1 },
  ];

  let arabicNum = arabic
  
  for (let i = 0; i < romanObj.length; i++) {
        // console.log(arabicNum,2*romanObj[i].arabic)
    if(arabicNum >=3*romanObj[i].arabic){
      console.log('3x',arabicNum, romanObj[i])
      roman.push(romanObj[i].roman)
      arabicNum -= romanObj[i].arabic
      roman.push(romanObj[i].roman)
      arabicNum -= romanObj[i].arabic
      roman.push(romanObj[i].roman)
      arabicNum -= romanObj[i].arabic

    }else if(arabicNum >=2*romanObj[i].arabic){
      console.log('2x',arabicNum, romanObj[i])
      roman.push(romanObj[i].roman)
      arabicNum -= romanObj[i].arabic
      roman.push(romanObj[i].roman)
      arabicNum -= romanObj[i].arabic

    }else if (Math.floor(arabicNum >= romanObj[i].subArabic && arabicNum / romanObj[i].subArabic) == 1) {
      console.log(arabicNum, romanObj[i])

      roman.push(romanObj[i].roman)
      arabicNum -= romanObj[i].subArabic

    } else if (arabicNum >= romanObj[i].arabic) {
      console.log(arabicNum, romanObj[i])

      roman.push(romanObj[i].roman)
      arabicNum -= romanObj[i].arabic

      // if (arabicNum >= romanObj[i].arabic) {
      //   console.log('again')
      //   for (let j = 0; j < romanObj.length; j++) {
      //     if (arabicNum >= romanObj[j].arabic){

      //       console.log(arabicNum, romanObj[j])
      //       roman.push(romanObj[j].roman)
      //       arabicNum -= romanObj[j].arabic
      //     }
      //   }
      // }
    }
  }
  console.log(arabic, roman.join(''))
  output.textContent = roman.join('')
}



convertBtn.addEventListener('click', () => {
  if (number.value === '') {
    output.textContent = 'Please enter a valid number'
  } else if (number.value < 1) {
    output.textContent = 'Please enter a number greater than or equal to 1'
  } else if (number.value > 3999) {
    output.textContent = 'Please enter a number less than or equal to 3999'
  } else {
    romanNumberConvert(Number(number.value))
  }
  console.log(number.value)


})


//^----Tests----
const tests = [
  // 9,
  // 16,
  // 649,
  1023,
  3999
  //IX,XVI,DCXLIX,MXXIII,MMMCMXCIX
]
for (let i = 0; i < tests.length; i++) {
  romanNumberConvert(tests[i])
}
