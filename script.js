const container = document.querySelector(".container");

function createGrid(input) {
  for (let i = 0; i < input * input; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    container.appendChild(div);
  }
}

createGrid(16);

const div = document.querySelector(".box");
div.addEventListener("");
