const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const phoneVal = (number) => {
  // console.log(number)

  // let regExOne = /(^1\s)(\d{3})(-| )(\d{3})(-| )(\d{4})/

  // let regExPa = /(^1\s|1)(\()(\d{3})(\)|\) )(\d{3})-(\d{4})/

  // let regExNum = /(^\(|)(\d{3})(\)|-|)(\d{3})(-|)(\d{4})/

  let regExAll = /(1{1}|1 |)(\(|)\d{3}(-|\)|\) | |)\d{3}(-| |)\d{4}/

  // console.log(regExOne.test(number),number)
  console.log(
    // regExOne.test(number),
    // regExPa.test(number),
    // regExNum.test(number),
    regExAll.test(number),
    number)
}

checkBtn.addEventListener('click',()=>{
  if(!userInput.value){
    alert('Please provide a phone number')
  }else{
    phoneVal(userInput.value)
  }
});

clearBtn.addEventListener('click',()=>{
  resultsDiv.innerText = ''
  console.log('clearBtn')
})

//^----Tests----
const tests = [
  //Valid
  '5555555555',
  '555-555-5555',
  '(555)555-5555',
  '1 555-555-5555',
  '1 555 555 5555',
  '1 456 789 4444',
  '1 (555) 555-5555',
  '1(555)555-5555',
  //! Invalid
  '11 555-555-5555',
  // '2 (757) 622-7382',
  // '0 (757) 622-7382',
  // '-1 (757) 622-7382',
  // '10 (757) 622-7382',
  // '2(757)622-7382',
  // '(6054756961)',
  // '27576227382',
  // '555-5555',
  // '5555555',
  // '1 555)555-5555',
  // '123**&!!asdf#',
  // '55555555',
  // '2 757 622-7382',
  // '(275)76227382',
  // '2(757)6227382',
  // '555)-555-5555',
  // '(555-555-5555',
  // '(555)5(55?)-5555',
  // '55 55-55-555-5',
]
for(let i = 0;i<tests.length;i++){
  phoneVal(tests[i])
}