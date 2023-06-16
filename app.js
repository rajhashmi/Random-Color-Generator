const containerEl = document.getElementById("container");

for (let i = 0; i < 30; i++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}


const colorContainerEls = document.querySelectorAll(".color-container ")

console.log(colorContainerEls);

generateColor()

function generateColor(){

    colorContainerEls.forEach((colorContainerEl)=>{
       const newColorCode = randomColor();
       colorContainerEl.style.backgroundColor = "#" + newColorCode
       colorContainerEl.innerText = "#" + newColorCode
    })
    
}

function randomColor() {
  const chars = "0123456789abcdef";
  const colorLength = 6;
  let colorCode = "";
  for (j = 0; j < colorLength; j++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNumber,randomNumber +1);
}
return colorCode
}   

