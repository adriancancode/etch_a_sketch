const grid = document.getElementById("grid");

for (let i = 1; i <= 256; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "grid-square");
    grid.appendChild(square);
    
}

const button = document.getElementById("grid-button");
button.addEventListener("click", function() {
    const size = prompt("How many squares?");
    size *= size;
    grid.innerHTML = '';
    
    for (let i = 1; i <= size; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "grid-square");
        grid.appendChild(square);
        
    }
    grid.remove();
});





