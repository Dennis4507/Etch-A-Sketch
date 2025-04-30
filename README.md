# Etch-A-Sketch

Project: Etch-a-Sketch

This project is a web-based Etch-A-Sketch application that allows users to draw on a grid by hovering over cells. Users can dynamically adjust the grid size and reset the grid for a new drawing session.

## Features
- Dynamic grid creation with adjustable size.
- Hover effect to "draw" on the grid by changing cell colors.
- Randomized colors for each hover interaction.
- Input validation for grid resizing.
- Responsive and visually appealing design.

---

## Commit History

### **Commit 1: Initial Setup**
**What We Did:**
- Created the basic HTML structure with a `<div>` container for the grid.
- Added a `styles.css` file to style the container and grid layout.
- Added a `script.js` file to dynamically generate grid cells.

**Challenges:**
- The grid cells were not square, leading to an uneven layout.
- The hover effect for drawing was not implemented.

**Solution:**
- Added `aspect-ratio: 1 / 1` in the CSS to ensure grid cells were square.
- Implemented a basic hover effect using JavaScript's `mouseenter` event.

---

### **Commit 2: Dynamic Grid Creation**
**What We Did:**
- Added the `starter` function in `script.js` to dynamically generate a grid of any size.
- Used nested loops to create rows (`branch` elements) and columns (grid cells).
- Set a default grid size of 16x16.

**Challenges:**
- The grid was hardcoded to a fixed size, and there was no way for users to adjust it.
- The hover effect was not applied consistently when the grid was regenerated.

**Solution:**
- Added a button labeled "Adjust Grid" to allow users to resize the grid.
- Moved the hover effect logic inside the `starter` function to ensure it was reapplied whenever the grid was recreated.

---

### **Commit 3: Adding the "Adjust Grid" Button**
**What We Did:**
- Dynamically created the "Adjust Grid" button in JavaScript and appended it to the DOM.
- Added an event listener to the button to prompt the user for a new grid size.
- Cleared the existing grid before generating a new one.

**Challenges:**
- The button was not styled, making it visually unappealing.
- Users could enter invalid inputs (e.g., negative numbers or values greater than 100), breaking the grid.

**Solution:**
- Styled the button in `styles.css` to make it visually appealing.
- Added input validation to ensure the grid size was between 1 and 100. Displayed an alert for invalid inputs and reset the grid to the default size.

---

### **Commit 4: Randomized Hover Colors**
**What We Did:**
- Added the `getRandomColor` function to generate random RGB colors.
- Applied the random colors to grid cells when hovered over.

**Challenges:**
- The hover effect was initially inconsistent due to improper event listener application.

**Solution:**
- Ensured the hover effect was applied to all grid cells by re-selecting them after the grid was regenerated.

---

### **Commit 5: Improved Styling**
**What We Did:**
- Styled the `.container` and `.branch` elements to center the grid and add spacing between rows.
- Styled the grid cells with borders and smooth transitions for hover effects.
- Styled the "Adjust Grid" button to make it more user-friendly.

**Challenges:**
- The grid layout was not visually appealing, and the hover effect was abrupt.

**Solution:**
- Added CSS transitions for smoother hover effects.
- Used `box-sizing: border-box` to ensure consistent cell sizing.

---

### **Commit 6: Final Touches**
**What We Did:**
- Added a title (`<h1>Etch-A-Sketch`) to the HTML for better presentation.
- Added a reset button to clear the grid and start over.
- Tested the application for edge cases (e.g., invalid inputs, resizing the grid multiple times).

**Challenges:**
- Ensuring the application worked seamlessly across different grid sizes and user inputs.

**Solution:**
- Thoroughly tested the application and fixed minor bugs (e.g., clearing the grid properly before resizing).

---

## Challenges and Solutions Summary
1. **Grid Cell Sizing**: Ensured cells were square using `aspect-ratio: 1 / 1`.
2. **Dynamic Grid Resizing**: Added a button and input validation to allow users to resize the grid dynamically.
3. **Hover Effect Consistency**: Moved event listener logic inside the `starter` function to ensure it was reapplied after grid regeneration.
4. **Styling**: Improved the visual appeal of the grid, buttons, and overall layout using CSS.

---

## How to Use
1. Open the webpage in a browser.
2. Use the default 16x16 grid to start drawing by hovering over cells.
3. Click the "Adjust Grid" button to resize the grid (enter a number between 1 and 100).
4. Optionally, add a reset button to clear the grid and start over.

---

## Future Improvements
- Add a color picker to let users choose their own drawing color.
- Add an "Erase" mode to clear specific cells.
- Save the drawing as an image file.


