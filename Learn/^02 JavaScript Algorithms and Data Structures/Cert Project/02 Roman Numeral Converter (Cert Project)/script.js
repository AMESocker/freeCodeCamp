const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output'); 

convertBtn.addEventListener('click',()=>{
  // if(number.value === ''){
  //   output.textContent = 'Please enter a valid number'
  // }
  // console.log(number.value)
  // romanNumberConvert(number.value)
  romanNumberConvert(Number('2024'))

})
console.log()
function romanNumberConvert(roman) {

}