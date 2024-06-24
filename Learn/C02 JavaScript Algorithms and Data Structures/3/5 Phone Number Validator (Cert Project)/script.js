const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const regExNum = /^(\d{3})(-|)(\d{3})(-|)(\d{4})$/
const regExPa = /^(\()(\d{3})(\)|\) )(\d{3})-(\d{4})/
const regExOneSpace = /(^1{1})(\s)(\d{3})(\s)(\d{3})(\s)(\d{4})$/
const regExOnePa = /(^1{1})(\(| \()(\d{3})(\)|\) )(\d{3})(-)(\d{4})$/
const regExOne = /(^1{1})(\s)(\d{3})(-)(\d{3})(-)(\d{4})$/

const validList = [
  regExNum,
  regExPa,
  regExOneSpace,
  regExOnePa,
  regExOne
]

const phoneVal = (number) => validList.some((regex)=>regex.test(number));

  // console.log(validList.some((regex)=>{regex.test(number)}),number)

  // console.log(
  //   validList.some((regex)=>regex.test(number)),
  //   regExNum.test(number),
  //   regExPa.test(number),
  //   regExOneSpace.test(number),
  //   regExOnePa.test(number),
  //   regExOne.test(number),
  //   number)


checkBtn.addEventListener('click',()=>{
  if(!userInput.value){
    alert('Please provide a phone number')
  }else{
    resultsDiv.textContent = phoneVal(userInput.value)
    ? `Valid US number: ${userInput.value}`
    : `Invalid US number: ${userInput.value}`;
  }
});

clearBtn.addEventListener('click',()=>{
  resultsDiv.innerText = ''
})

//^----Tests----
const tests = [
  //Valid
  '1 555-555-5555',
  '1 (555) 555-5555',
  '5555555555',
  '555-555-5555',
  '1(555)555-5555',
  '(555)555-5555',
  '1 555 555 5555',
  '1 456 789 4444',
  '__________Invalid___________',
  '555-5555',
  '5555555',
  '1 555)555-5555',
  '123**&!!asdf#',
  '55555555',
  '(6054756961)',
  '2 (757) 622-7382',
  '0 (757) 622-7382',
  '-1 (757) 622-7382',
  '2 757 622-7382',
  '10 (757) 622-7382',
  '27576227382',
  '(275)76227382',
  '2(757)6227382',
  '2(757)622-7382',
  '555)-555-5555',
  '(555-555-5555',
  '(555)5(55?)-5555',
  '55 55-55-555-5',
  '11 555-555-5555',
]
for(let i = 0;i<tests.length;i++){
  phoneVal(tests[i])
}