# Tech Stack
I used React + TypeScript + Vite because it straightforwardly handles dynamic UI updates and I’m most proficient with React and TS. Vite provides a lightning‐fast development server and minimal build configuration.
 
# Minesweeper Logic

Random Placement (Rejection Sampling)
Ensures each mine is placed in a unique, uniformly random cell by repeatedly picking a random (row, col) until all mines are placed.

Neighbor‐Count (Convolution)
For every non‐mine cell, check its eight neighbors and count how many contain mines; that count becomes the cell’s clue number.

Bounds Check (“Clamping”)
Before placing mines, clamp the mines count so it never exceeds (rows × cols − 1), guaranteeing the placement loop terminate