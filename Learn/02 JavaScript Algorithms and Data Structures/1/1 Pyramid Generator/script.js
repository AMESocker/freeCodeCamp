const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount){
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}


for (let i = 1; i<count; i++) {
  rows.push(padRow(i , count))
}

let result = '';

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

// const call = padRow();
// console.log(call);
/* function padRow(){
  const test = "Testing";
  return test;
} */
// const call = padRow('CamperAron');
// let rows = ["Naomi", "Quincy","CamperChan"];
// let pushed = rows.push("freeCodeCamp");
// console.log(pushed);
// let popped = rows.pop();
// console.log(popped);
// console.log(rows);
// console.log(rows[0]);
// rows[rows.length-1] = 10;
// console.log(count+1)
// console.log(character)
// character = "World"
// console.log(character)
// let secondCharacter;
// secondCharacter = character;
// console.log(secondCharacter)