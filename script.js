const DEFAULT_GRID_SIZE = 50;
let pencilMode = "color";
const gridContainer = document.querySelector("#grid-container");
const resizeButton = document.querySelector("#resize-grid");
const rainbowButton = document.querySelector("#rainbow-mode");

document.body.appendChild(createDivGrid(DEFAULT_GRID_SIZE));
resizeButton.addEventListener("click", resizeGrid);
rainbowButton.addEventListener("click", function (e) {
  pencilMode = "rainbow";
})

function createDivGrid (size) {

  for(let i=0; i<size; i++) {
    let divRow = document.createElement("div");
    divRow.classList.add("grid-row");
    
    for(let j=0; j<size; j++) {   
      
      let divElement = document.createElement("div");
      divElement.classList.add("elements");

      divElement.addEventListener("mouseover", function (e) {
        drawDiv(divElement,"black");
      });

      divRow.appendChild(divElement);

    }

    gridContainer.appendChild(divRow);
    
  }

  return gridContainer;
}

function drawDiv (divElement, color) {
  if(pencilMode === "color")
    divElement.style.backgroundColor = color;
  if(pencilMode === "rainbow")
    divElement.style.backgroundColor = `rgb(
      ${getRandomBetween(0,255)},
      ${getRandomBetween(0,255)},
      ${getRandomBetween(0,255)})`;
}

function resizeGrid() {
  let sizeTyped = prompt("What size do you prefer your grid to be ? (Max 100)");
  sizeTyped = +sizeTyped;

  if(!Number.isInteger(sizeTyped)) {
    alert("Invalid number");
    return;
  }

  if(sizeTyped <= 0 || sizeTyped > 100) {
    alert("Please choose a number between 1 and 100.");
    return;
  }

  gridContainer.innerHTML = "";
  createDivGrid(sizeTyped);
}

function getRandomBetween(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}