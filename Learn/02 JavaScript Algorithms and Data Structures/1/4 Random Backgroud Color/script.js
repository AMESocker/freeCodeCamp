const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];
const hexNumbers = "0123456789ABCDEF";
console.log(hexNumbers.length);
function getRandomIndex() {

  let hexNumber = []

  const hexArray = hexNumbers.split("");

  for (let i = 0; i < 6; i++) {
  const randomHex = Math.floor(Math.random() * hexArray.length);
  let randomHexNum = (hexArray[randomHex]);
    hexNumber.push(randomHexNum)
  }
    
  return '#'+hexNumber.join("")
}

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

function changeBackgroundColor() {
  const color = getRandomIndex();
  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}
const btn = document.querySelector("#btn");

btn.onclick = changeBackgroundColor;