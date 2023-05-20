
function createDivGrid (rows,columns) {
  let grid = [];
  let subArray = [];

  for(let i=0; i<columns; i++) {     
    let divElement = document.createElement("div");
    divElement.classList.toggle("grid-element");
    subArray.push(divElement);
  }

  for(let i=0; i<rows; i++) {
    grid.push(subArray);
  }

  return grid;
}
