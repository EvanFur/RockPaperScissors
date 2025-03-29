// Select the container and button
const container = document.getElementById("container");
const gridButton = document.getElementById("gridButton");

// Function to generate a random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to create a responsive grid
function createGrid(size) {
    container.innerHTML = ""; // Clear old grid

    let gridSize = container.clientWidth; // Get container size
    let cellSize = gridSize / size; // Adjust cell size dynamically

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.style.border = "1px solid lightgray";
        cell.style.boxSizing = "border-box";

        // Add hover effect with a random color
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = getRandomColor(); // Change to random RGB color
        });

        container.appendChild(cell);
    }
}

// Default grid size
let gridSize = 16;
createGrid(gridSize);

// Button event listener
gridButton.addEventListener("click", () => {
    let newSize = prompt("Enter the number of squares per side (max 100):");

    if (newSize !== null) {
        newSize = parseInt(newSize);

        if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
            gridSize = newSize;
            createGrid(gridSize);
        } else {
            alert("Please enter a valid number between 1 and 100.");
        }
    }
});

// Resize grid when the window resizes
window.addEventListener("resize", () => createGrid(gridSize));
