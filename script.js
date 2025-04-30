const body = document.querySelector("body");
const contain = document.querySelector(".container");
const grid = document.createElement("div");
grid.setAttribute("class", "grid");

function starter(value) {
    for (i = 0; i < value; i++) {
        let secContain = document.createElement("div");
        secContain.setAttribute("class", "branch");
        contain.appendChild(secContain);
        for (j = 0; j < value; j++) {
            let div = document.createElement("div");
            secContain.appendChild(div);
        }
    }

    // Add hover effect to new grid cells
    let groups = document.querySelectorAll('.branch div');
    groups.forEach(group => {
        group.addEventListener('mouseenter', () => {
            group.style.backgroundColor = getRandomColor();
        });
    });
}

// Select the "Adjust Grid" button
const adjustGridButton = document.getElementById("adjust-grid");

// Add an event listener to the button
adjustGridButton.addEventListener("click", () => {
    // Prompt the user for a new grid size
    const gridSize = parseInt(prompt("Enter new grid size (e.g., 16 for 16x16):"), 10);

    // Validate the input
    if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
        contain.innerHTML = "";
        starter(gridSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    contain.innerHTML = "";
    starter(16); // Reset to default 16x16 grid
});

const width = document.createElement("button");
width.textContent = "Adjust Grid";  

starter(16);

width.addEventListener("click", () => {
contain.innerHTML = "";

let value = prompt("Enter the Number(Max 100)");
value = parseInt(value);

if (value>0 &&  value<=100){
    starter(value)        
}else { 
    alert("wrong input!");
    starter(16)
}
})

body.appendChild(width);

function getRandomColor() {
const r = Math.floor(Math.random() * 256);  
const g = Math.floor(Math.random() * 256); 
const b = Math.floor(Math.random() * 256);  
return `rgb(${r}, ${g}, ${b})`;
}

