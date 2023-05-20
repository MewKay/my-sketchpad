
function createDivGrid (rows,columns) {
  let gridContainer = document.createElement("div");
  gridContainer.classList.toggle("grid");

  for(let i=0; i<rows; i++) {
    let divRow = document.createElement("div");
    divRow.classList.toggle("grid-row");
    
    for(let i=0; i<columns; i++) {   
      
      let divElement = document.createElement("div");
      divElement.classList.toggle("elements");
      divRow.appendChild(divElement);

    }

    gridContainer.appendChild(divRow);
    
  }

  return gridContainer;
}
