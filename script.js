const DEFAULT_GRID_SIZE = 50;
const resizeButton = document.querySelector("#resize-grid");

document.body.appendChild(createDivGrid(DEFAULT_GRID_SIZE,DEFAULT_GRID_SIZE));

function createDivGrid (rows,columns) {
  let gridContainer = document.createElement("div");
  gridContainer.classList.toggle("grid");

  for(let i=0; i<rows; i++) {
    let divRow = document.createElement("div");
    divRow.classList.toggle("grid-row");
    
    for(let i=0; i<columns; i++) {   
      
      let divElement = document.createElement("div");
      divElement.classList.toggle("elements");

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
