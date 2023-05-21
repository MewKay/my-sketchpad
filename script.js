const DEFAULT_GRID_SIZE = 50;
const gridContainer = document.querySelector("#grid-container");
const resizeButton = document.querySelector("#resize-grid");

document.body.appendChild(createDivGrid(DEFAULT_GRID_SIZE));
resizeButton.addEventListener("click", resizeGrid);

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
  divElement.style.backgroundColor = color;
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
