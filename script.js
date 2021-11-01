const container = document.querySelector(".container");
const resetButton = document.querySelector("#reset");
const newGridButton = document.querySelector("#new-grid");
newGridButton.addEventListener("click", newGrid);

function newGrid() {
  const divs = document.querySelectorAll(".box");
  for (let i = 0; i < divs.length; i++) {
    container.removeChild(divs[i]);
  }

  createGrid();
}

const createGrid = () => {
  let input = prompt("Choose the size of the grid (up to 100 per side) ", "");
  input > 100 ? alert("The amount of squares is too damn high!") : "";

  for (let i = 0; i < input * input; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.style.width = `${100 / input}%`;
    div.style.height = `${100 / input}%`;
    container.appendChild(div);
    div.addEventListener("mouseover", () => div.classList.add("etched"));
    resetButton.addEventListener("click", () => div.classList.remove("etched"));
  }
};
