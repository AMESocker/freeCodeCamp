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

//save the colors that the user likes
const saveBtn = document.querySelector("#save-btn");

saveBtn.onclick = function() {
  const savedColors = localStorage.getItem("colors") ? JSON.parse(localStorage.getItem("colors")) : [];
  savedColors.push(bgHexCodeSpanElement.innerText);
  localStorage.setItem("colors", JSON.stringify(savedColors));
}

//display the saved colors
const displayBtn = document.querySelector("#display-btn");

displayBtn.onclick = function() {
  const savedColors = localStorage.getItem("colors") ? JSON.parse(localStorage.getItem("colors")) : [];
  const colorsContainer = document.querySelector("#colors-container");
  colorsContainer.innerHTML = "";
  savedColors.forEach(color => {
    const colorDiv = document.createElement("div");
    colorDiv.style.backgroundColor = color;
    colorDiv.innerText = color;
    colorsContainer.appendChild(colorDiv);
  });
}