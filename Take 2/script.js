const grid = document.getElementById("container");

for (let i = 1; i <= 256; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "grid-square");
    grid.appendChild(square);
    
}
console.log("Hello World");

let squares = document.getElementsByClassName("grid-square");
squares.addEventListener("mouseover", changeSquareColor(squa));




function changeSquareColor(){
    
}